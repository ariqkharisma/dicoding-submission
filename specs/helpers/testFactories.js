/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestaurant from '../../src/scripts/data/favorite-db';

const likeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurant,
    restaurant,
  });
};

export { likeButtonPresenterWithRestaurant };
