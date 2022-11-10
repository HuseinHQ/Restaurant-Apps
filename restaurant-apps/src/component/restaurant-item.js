class RestaurantItem extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  // connectedCallback(){
  //   console.log('Masuk pak eko');
  //   this.render();
  // }

  set restaurant(restaurant){
    this._restaurant = restaurant;
    console.log(this._restaurant);
    this.render();
  }

  render(){
    this.shadowDOM.innerHTML = `
    <style>
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
    
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    :host {
      display: block;
      margin: 0 10px 18px 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      overflow: hidden;
      max-width: 400px;
      justify-content: center;
    }
     
    .fan-art-restaurant {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
      object-position: center;
    }

    .resto-img{
      position: relative;
      width: 100%;
      max-height: 180px;
      object-fit: cover;
    }

    .restaurant-city {
      position: absolute;
      margin-top: -160px;
      background: rgba(255,255,255, 0.8);
      padding: 5px 10px 5px 30px;
      border-radius: 0 2px 2px 0;
    }

    .restaurant-info {
      padding: 24px;
    }
     
    .restaurant-info > h2 {
      font-weight: lighter;
    }
     
    .restaurant-info > p {
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4; /* number of lines to show */
    }
    
    .rating {
      margin-bottom: 20px;
      font-weight: bold;
    }
    </style>
    
    <div>
      <img class="resto-img" src="${this._restaurant.pictureId}" alt="${this._restaurant.name}">
      <div class="restaurant-city"><p>Kota ${this._restaurant.city}</p></div>
    </div>
    <div class="restaurant-info">
      <p class="rating">Rating: <i class="fa fa-star" style="font-size:24px;color:yellow"></i> ${this._restaurant.rating}</p>
      
      <h2 tabindex="0">${this._restaurant.name}</h2>
      <p>${this._restaurant.description}</p>
    </div>
  `;
  }
}

customElements.define('restaurant-item', RestaurantItem);