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
<div class="container">
  <div class="detail-header">
    <div class="detail-info">
      <h1 class="title">${data.name}</h1>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a>Explore Menu</a>
      <div class="info">
        <div class="city">
          <h4>City</h4>
          <p>${data.city}</p>
        </div>
        <div class="address">
          <h4>Address</h4>
          <p>${data.address}</p>
        </div>
        <div class="rating">
          <h4>Rating</h4>
          <p>${data.rating}</p>
        </div>
        <div class="categories">
          <h4>Categories</h4>
          <p>${data.categories?.map((category) => `<span>${category.name}</span>`).join(', ')}</p>
        </div>
      </div>
    </div>
    <img class="detail-image" src=${ENDPOINT.IMG.M}${data.pictureId} alt=${data.name}/>
  </div>
  <div class="detail-overview">
    <h1>Overview</h1>
    <p>${data.description}</p>
  </div>
  <div class="detail-menu" id="detailMenu">
    <h1>Menu</h1>
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
  <div class="detail-review">
    <h2>Reviews</h2>
    ${data.customerReviews.map((review) => `
    <div class="review-item">
      <p style="font-weight: 700">${review.name}</p>
      <p>${review.review}</p>
      <p style="font-size: 12px">${review.date}</p>
    </div>
    `).join('')}
  </div>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="Favorite this restaurant" id="likeButton" class="like">
    <i class="fa-regular fa-heart fa-2xl"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="Unfavourite this restaurant" id="likeButton" class="like">
    <i class="fa-solid fa-heart fa-2xl" style="color: #EC7272" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
