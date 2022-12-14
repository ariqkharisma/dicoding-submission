import { createRestaurantItemTemplate } from '../templates/template-creator';
import Source from '../../data/restaurantdb-source';

const Home = {
  async render() {
    return `
      <section id="hero">
        <picture>
          <img class="lazyload" src="/images/hero-image.jpg" alt="hero images"/>
        </picture>
      </section>
      <section id="explore">
        <h1>Explore Restaurant</h1>
        <div class="restaurants"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurant = await Source.allRestaurants();
    const restaurantContainer = document.querySelector('.restaurants');
    if (restaurant && restaurant.length > 0) {
      restaurant.forEach((item) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(item);
      });
    }
  },
};

export default Home;
