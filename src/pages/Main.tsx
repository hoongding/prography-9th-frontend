import { useMeals } from '@apis/meals/queries';
import { IMeal, IMeals } from '@apis/meals/types';
import Categories from '@components/Categories';
import Header from '@components/Header';
import { FILTER_ACTION_TYPES, useFilterDispatchContext, useFilterStateContext } from '@context/filterContext';
import React, { useState } from 'react';

const Main = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
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

  return (
    <>
      <Header />
      <Categories selectedCategories={selectedCategories} handleSelectedCategory={handleSelectedCategory} />
      <div>{filterState.meals.length}</div>
    </>
  );
};

export default Main;
