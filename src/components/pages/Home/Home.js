import React, { useEffect, useState } from 'react';
import Hero from '../../elements/Hero';
import Text from '../../elements/Text';
import Spacer from '../../elements/Spacer';
import Card, { CardList } from '../../modules/Card';
import homeImage from '../../../assets/home-background.jpg';
import logo from '../../../assets/logo.png';
import { getRandomRecipes } from 'utils/api';
import styles from './styles.module.scss';

const Home = () => {
  const [recipes, setRecipes] = useState(null);
  useEffect(() => {
    const getRecipes = async () => {
      const recipes = await getRandomRecipes();
      const recipesData = recipes.map((recipe) => {
        return recipe?.data?.meals?.[0];
      });

      setRecipes(recipesData);
    };

    getRecipes();
  }, []);

  return (
    <>
      <Hero imageSrc={homeImage}>
        <img src={logo} alt="The meal App" width={130} height={130} />
      </Hero>
      <Spacer y={5}></Spacer>
      <Text as="h2" className={styles.subTitle}>
        Recipes of the day
      </Text>
      <Spacer y={8}></Spacer>

      {recipes && (
        <CardList>
          {recipes.map(({ strMealThumb, strMeal, idMeal }) => {
            return (
              <Card
                to={`/recipes/${idMeal}`}
                imageSrc={strMealThumb}
                title={strMeal}
              ></Card>
            );
          })}
        </CardList>
      )}
    </>
  );
};

export default Home;
