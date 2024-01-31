const BASE_API_URL = `${process.env.REACT_APP_SERVER_URL}`;

const apis = {
  categories: () => `${BASE_API_URL}/categories.php`,
  meals: () => `${BASE_API_URL}/filter.php`,
};

export default apis;
