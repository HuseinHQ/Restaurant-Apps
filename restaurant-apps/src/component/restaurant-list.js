import './restaurant-item';
const data = require('../DATA.json');

class RestaurantList extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback(){
    console.log("Masuk pak eko");
    this.render();
  }

  render(){
    const dataJson = data;
    const { restaurants } = dataJson
    console.log(restaurants);

    this.shadowDOM.innerHTML = '';
    restaurants.forEach(restaurant => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.setAttribute("tabindex", "0");
      //memanggil fungsi setter restaurant() pada restaurant-item.
      restaurantItemElement.restaurant = restaurant;
      this.shadowDOM.appendChild(restaurantItemElement);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);