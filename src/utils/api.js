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

export { getRandomRecipes };
