import FavoriteRestaurant from '../src/scripts/data/favorite-db';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurant.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurant.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.likeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="Unfavourite this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.likeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="Favorite this restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.likeButtonPresenterWithRestaurant({ id: 1 });

    document
      .querySelector('[aria-label="Unfavourite this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.likeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurant.deleteRestaurant(1);

    document
      .querySelector('[aria-label="Unfavourite this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
  });
});
