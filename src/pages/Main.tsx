import { useMeals } from '@apis/meals/queries';
import { IMeal, IMeals } from '@apis/meals/types';
import Categories from '@components/Categories';
import Filter from '@components/Filter';
import Header from '@components/Header';
import Meals from '@components/Meals';
import { FILTER_ACTION_TYPES, useFilterDispatchContext, useFilterStateContext } from '@context/filterContext';
import React, { useState } from 'react';

const Main = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [gridNum, setGridNum] = useState({ value: 4, label: '4개씩 보기' });

  const { filterState, isFilterChanged } = useFilterStateContext();
  const filterDispatch = useFilterDispatchContext();

  useMeals(selectedCategories, (data: IMeal[]) => {
    filterDispatch({ type: FILTER_ACTION_TYPES.ADD_MEALS, payload: data });
  });

  const handleSelectedCategory = (strCategory: string) => {
    setSelectedCategories(prev =>
      !prev.includes(strCategory) ? [...prev, strCategory] : prev.filter(categoryName => categoryName !== strCategory)
    );
  };

  const handleGridNum = (value: number) => {
    setGridNum({ value: value, label: `${value}개씩 보기` });
  };

  return (
    <>
      <Header />
      <Categories selectedCategories={selectedCategories} handleSelectedCategory={handleSelectedCategory} />
      <Filter
        mealsCount={filterState.meals.length}
        viewCount={20}
        handleGridNum={handleGridNum}
        gridNum={gridNum.value}
      />
      <Meals gridNum={gridNum.value} />
    </>
  );
};

export default Main;
