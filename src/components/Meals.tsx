import React, { useState } from 'react';
import styled from 'styled-components';

import { useFilterStateContext } from '@context/filterContext';
import Image from './common/Image';
import { FONT_TOKEN } from '@styles/fonts';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { IMeal } from '@apis/meals/types';

interface IMeals {
  gridNum: number;
  seenMeals: IMeal[];
  setSeenMeals: React.Dispatch<React.SetStateAction<IMeal[]>>;
}

const Meals = ({ gridNum, seenMeals, setSeenMeals }: IMeals) => {
  const { filterState } = useFilterStateContext();
  const { meals } = filterState;

  const [isSeenMealUpdated, setIsSeenMealUpdated] = useState(false);

  const intersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
    // meals를 20개씩 무한스크롤 처럼 끊어서 보여주기
    // 마지막 20개를 끊었을때 20개가 안되면 더이상 불러올 데이터가 없다는 것이므로 더이상 IntersectionObserver를 호출하지 않는다.
    // 20개가 아니라 17개가 남았다면 17개만 set해준다.
    const entry = entries[0];

    if (!entry.isIntersecting || isSeenMealUpdated) return;
    if (entry.isIntersecting) {
      if (seenMeals.length + 20 >= meals.length) {
        const nextSeenMeals = meals.slice(seenMeals.length, meals.length);

        setSeenMeals(prev => (nextSeenMeals.length === 0 ? prev : [...prev, ...nextSeenMeals]));
      } else {
        const nextSeenMeals = meals.slice(seenMeals.length, seenMeals.length + 20);

        setSeenMeals(prev => (nextSeenMeals.length === 0 ? prev : [...prev, ...nextSeenMeals]));
      }
    }
    setIsSeenMealUpdated(false);
  };

  const observerTarget = useIntersectionObserver(intersectionObserverCallback);

  console.log(seenMeals.length);

  return (
    <Container>
      {meals.length === 0 ? (
        <div>카테고리로 음식을 조회해보세요!</div>
      ) : (
        <>
          <MealsContainer gridNum={gridNum}>
            {seenMeals.map(meal => (
              <MealItem key={meal.idMeal}>
                <Image src={meal.strMealThumb} alt={meal.strMeal} isRounded={true} />
                {meal.strMeal}
              </MealItem>
            ))}
          </MealsContainer>
          <div ref={observerTarget} />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  // 한줄에 4개씩 Grid로 보여주는 기능 or 2개씩 Grid로 보여주는 기능을 포함해야함.
  margin-top: 20px;
`;

const MealsContainer = styled.div<{ gridNum: number }>`
  display: grid;
  grid-template-columns: ${({ gridNum }) => `repeat(${gridNum}, 1fr)`};
  gap: 9px;

  // 모바일일땐 grid가 아닌 flex로 보여주기
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const MealItem = styled.div`
  ${FONT_TOKEN['Body1-16Md']}
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 15px;
`;

export default Meals;
