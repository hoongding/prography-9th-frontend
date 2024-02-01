import React from 'react';
import styled from 'styled-components';

import { useFilterStateContext } from '@context/filterContext';
import Image from './atom/Image';
import { FONT_TOKEN } from '@styles/fonts';

const Meals = () => {
  const { filterState } = useFilterStateContext();
  const { meals } = filterState;

  return (
    <Container>
      {meals.length === 0 ? (
        <div>카테고리로 음식을 조회해보세요!</div>
      ) : (
        <MealsContainer gridNum={4}>
          {meals.map(meal => (
            <MealItem key={meal.idMeal}>
              <Image src={meal.strMealThumb} alt={meal.strMeal} isRounded={true} />
              {meal.strMeal}
            </MealItem>
          ))}
        </MealsContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  // 한줄에 4개씩 Grid로 보여주는 기능 or 2개씩 Grid로 보여주는 기능을 포함해야함.
  margin-top: 60px;
`;

const MealsContainer = styled.div<{ gridNum: number }>`
  display: grid;
  grid-template-columns: ${({ gridNum }) => `repeat(${gridNum}, 1fr)`};
  gap: 9px;
`;

const MealItem = styled.div`
  ${FONT_TOKEN['Body1-16Md']}
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 15px;
`;

export default Meals;
