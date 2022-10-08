class RestaurantDbSource {
  static async allRestaurants() {
    const response = await fetch('https://restaurant-api.dicoding.dev/list');
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${id}`);
    return response.json();
  }
}
export default RestaurantDbSource;
