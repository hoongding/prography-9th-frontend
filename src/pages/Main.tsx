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
  const [gridNum, setGridNum] = useState<1 | 2 | 4>(4);

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

  const handleGridNum = (num: 1 | 2 | 4) => {
    setGridNum(num);
  };

  return (
    <>
      <Header />
      <Categories selectedCategories={selectedCategories} handleSelectedCategory={handleSelectedCategory} />
      <Filter mealsCount={filterState.meals.length} viewCount={20} handleGridNum={handleGridNum} />
      <Meals gridNum={gridNum} />
    </>
  );
};

export default Main;
