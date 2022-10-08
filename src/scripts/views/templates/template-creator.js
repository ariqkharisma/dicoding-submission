import ENDPOINT from '../../globals/api-endpoints';

const createRestaurantItemTemplate = (data) => `
  <div class="restaurant-item" id=${data.id} tabindex="0">
    <div class="restaurant-image">
        <source type="image/webp" srcset=${ENDPOINT.IMG.S}${data.pictureId}/>
        <source type="image/jpeg" srcset=${ENDPOINT.IMG.S}${data.pictureId}/>
        <img class="lazyload" data-src=${ENDPOINT.IMG.S}${data.pictureId} alt=${data.name}>
    </div>
    <div class="restaurant-body">
        <h1>Rating: ${data.rating}</h1>
        <h2>${data.name}</h2>
        <p>${data.description.slice(0, 130)}...</p>
        <a href="${`/#/detail/${data.id}`}">Pilih Restaurant</a>
    </div>
  </div>`;

const createRestaurantDetailTemplate = (data) => `
  <div class="detail-header">
    <picture>
      <img class="detail-image" src=${ENDPOINT.IMG.M}${data.pictureId} alt=${data.name}/>
    </picture>
    <div class="detail-info">
      <h1 class="title">${data.name.toUpperCase()}</h1>
      <div class="info">
        <h2>Information</h2>
        <p>City : ${data.city}</p>
        <p>Address : ${data.address}</p>
        <p>Rating : ${data.rating}</p>
      </div>
        
      <div class="categories">
        <h4>Categories</h4>
        ${data.categories?.map((category) => `<span>${category.name}</span>`).join(', ')}
      </div>
      <div class="menu">
        <div class="menu-food">
          <h3>Food</h3>
          <ul>
            ${data.menus.foods?.map((food) => `<li>${food.name}</li>`).join('')}
          </ul>
        </div>
        <div class="menu-drink">
          <h3>Drink</h3>
          <ul>
            ${data.menus.drinks?.map((drink) => `<li>${drink.name}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  <div class="detail-overview">
    <h2>Overview</h2>
    <p>${data.description}</p>
  </div>
  <div class="detail-review">
    <h2>Reviews</h2>
    ${data.customerReviews.map((review) => `
      <p>Oleh ${review.name} : </p>
      <p>${review.review}</p>
      <p>Pada ${review.date}</p>
    `).join('<br>')}
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="Favorite this restaurant" id="likeButton" class="like">
    <i class="fa-regular fa-heart fa-2xl"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="Unfavourite this restaurant" id="likeButton" class="like">
    <i class="fa-solid fa-heart fa-2xl" style="color: red" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
