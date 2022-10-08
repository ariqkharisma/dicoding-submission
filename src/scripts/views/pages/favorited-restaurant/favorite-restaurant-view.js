/* eslint-disable class-methods-use-this */
/* eslint-disable quotes */
import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantView {
  getTemplate() {
    return `
      <section id="hero">
        <picture>
          <img class="lazyload" src="/images/hero-image.jpg" alt="hero images"/>
        </picture>
      </section>
      <section id="explore">
        <h1>Your Favorite Restaurants</h1>
        <div class="restaurants"></div>
      </section>
    `;
  }

  showFavoriteRestaurant(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)),
        '',
      );
    } else {
      document.querySelector('.restaurants').style.display = 'block';
      html = this._getEmptyRestaurantTemplate();
    }

    document.querySelector('.restaurants').innerHTML = html;
    document.querySelector('.restaurants').dispatchEvent(new Event('.restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return `<div id="no_result">Belum ada restoran yang dijadikan favorit olehmu</div>`;
  }
}

export default FavoriteRestaurantView;
