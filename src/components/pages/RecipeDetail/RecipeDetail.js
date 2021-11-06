import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getRecipeById } from 'utils/api';
import collectItems from 'utils/collectItems';
import Hero, { HeroSkeleton } from '../../elements/Hero';
import Spacer from '../../elements/Spacer';
import Text from '../../elements/Text/Text';
import Container from '../../elements/Container';
import styles from './styles.module.scss';
import Skeleton from 'react-loading-skeleton';

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const { recipeId } = useParams();

  useEffect(() => {
    const getRecipe = async () => {
      const result = await getRecipeById(recipeId);
      setRecipe(result?.data?.meals?.[0]);
    };

    getRecipe();
  }, [recipeId]);

  const renderIngredients = () => {
    const ingredients = collectItems('strIngredient', recipe);
    const measures = collectItems('strMeasure', recipe);

    return (
      <ul className={styles.ingredientsList}>
        {ingredients.map((ingredient, index) => {
          return (
            <li key={`${ingredient}-${index}`}>
              {measures[index]} {ingredient}
            </li>
          );
        })}
      </ul>
    );
  };

  if (!recipe) {
    return (
      <>
        <HeroSkeleton></HeroSkeleton>
        <Spacer></Spacer>
        <Container>
          <Skeleton height={32}></Skeleton>
          <Spacer y={8}></Spacer>
          <Skeleton count={8}></Skeleton>
          <Spacer y={8}></Spacer>
          <Skeleton height={32}></Skeleton>
          <Spacer y={8}></Spacer>
          <Skeleton count={7}></Skeleton>
          <Skeleton width={'50%'}></Skeleton>
          <Spacer y={8}></Spacer>
          <Skeleton count={7}></Skeleton>
          <Skeleton width={'50%'}></Skeleton>
        </Container>
      </>
    );
  }

  return (
    <>
      <Hero imageSrc={recipe.strMealThumb} size="medium"></Hero>
      <Spacer></Spacer>
      <Container>
        <Text as="h1" size="headline">
          {recipe.strMeal}
        </Text>
        <Spacer y={8}></Spacer>
        {renderIngredients()}
        <Spacer y={8}></Spacer>
        <Text as="h2" size="headline">
          Directions
        </Text>
        <Spacer y={8}></Spacer>
        <Text>{recipe.strInstructions}</Text>
      </Container>
    </>
  );
};

export default RecipeDetail;
