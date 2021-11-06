import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/',
});

const getRandomRecipes = (numOfRecipes = 5) => {
  const requests = [...Array(numOfRecipes).keys()].map(() => {
    return instance.get('/random.php');
  });

  return Promise.all(requests);
};

const getRecipeById = (id) => {
  if (!id) return;

  return instance.get(`/lookup.php?i=${id}`);
};

export { getRandomRecipes, getRecipeById };
