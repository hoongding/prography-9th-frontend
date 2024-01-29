const BASE_API_URL = `${process.env.CONF_SERVER_URL}`;

const apis = {
  categories: `${BASE_API_URL}/categories.php`,
  foods: (strCategory: string) => `${BASE_API_URL}/filter.php?c=${strCategory}`,
};

export default apis;
