const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-item', 30);
  I.seeElement('.restaurant-item');

  const sampleRestaurant = locate('.restaurant-item').first();
  const sampleRestaurantLink = locate('.restaurant-item a').first();
  const sampleRestaurantTitle = await I.grabTextFrom(sampleRestaurant);
  I.click(sampleRestaurantLink);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantLink = locate('.restaurant-item a').first();
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item');

  assert.strictEqual(sampleRestaurantTitle, likedRestaurantTitle);

  I.click(likedRestaurantLink);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('#no_result', 10);
  I.see('Belum ada restoran yang dijadikan favorit olehmu', '#no_result');
});
