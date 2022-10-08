/* eslint-disable no-new */
import FavoriteRestaurant from '../../data/favorite-db';
import FavoriteRestaurantView from './favorited-restaurant/favorite-restaurant-view';
import FavoriteRestaurantShowPresenter from './favorited-restaurant/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurant: FavoriteRestaurant });
  },
};

export default Favorite;
