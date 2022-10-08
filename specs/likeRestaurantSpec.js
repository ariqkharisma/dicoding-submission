import FavoriteRestaurant from '../src/scripts/data/favorite-db';
import * as TestFactories from './helpers/testFactories';

describe('Liking a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show like button when restaurant has not been liked before', async () => {
    await TestFactories.likeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="Favorite this restaurant"]'),
    ).toBeTruthy();
  });

  it('should show unlike button when restaurant has been liked before', async () => {
    await TestFactories.likeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="Unfavourite this restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to like a restaurant when button clicked', async () => {
    await TestFactories.likeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurant.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurant.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.likeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurant.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([{ id: 1 }]);

    FavoriteRestaurant.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.likeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
  });
});
