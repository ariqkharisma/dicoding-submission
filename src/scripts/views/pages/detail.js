import UrlParser from '../../routes/url-parser';
import Source from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-initiator';
import FavoriteRestaurant from '../../data/favorite-db';

const Details = {
  async render() {
    return `
      <section id="restaurantDetail">
        <div class="restaurant-detail"></div>
        <div id="likeButtonContainer"></div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const items = await Source.detail(url.id);
    const { restaurant } = items;
    const detailContainer = document.querySelector('.restaurant-detail');
    detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurant,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Details;
