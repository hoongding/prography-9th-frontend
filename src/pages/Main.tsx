import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useMeals } from '@apis/meals/queries';
import { IMeal } from '@apis/meals/types';
import Categories from '@components/Categories';
import Filter from '@components/Filter';
import Header from '@components/Header';
import Meals from '@components/Meals';
import { FILTER, FILTER_ACTION_TYPES, useFilterDispatchContext, useFilterStateContext } from '@context/filterContext';

const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get('categories')?.split(',') || ([] as string[])
  );
  const [gridNum, setGridNum] = useState({ value: 4, label: '4개씩 보기' });

  const { filterState } = useFilterStateContext();
  const filterDispatch = useFilterDispatchContext();

  const [seenMeals, setSeenMeals] = useState<IMeal[]>(filterState.meals.slice(0, 20));

  useEffect(() => {
    const filterOption =
      filterState.filterOption === FILTER.NEW ? 'NEW' : filterState.filterOption === FILTER.ASC ? 'ASC' : 'DESC';

    selectedCategories.length !== 0 && searchParams.set('categories', selectedCategories.join(','));
    searchParams.set('filter', filterOption);
    setSearchParams(searchParams);
  }, [filterState.filterOption, selectedCategories]);

  useMeals(selectedCategories, (data: IMeal[]) => {
    filterDispatch({ type: FILTER_ACTION_TYPES.ADD_MEALS, payload: data });
    if (filterState.filterOption === FILTER.NEW) filterDispatch({ type: FILTER_ACTION_TYPES.SET_FILTER_NEW });
    if (filterState.filterOption === FILTER.ASC) filterDispatch({ type: FILTER_ACTION_TYPES.SET_FILTER_ASC });
    if (filterState.filterOption === FILTER.DESC) filterDispatch({ type: FILTER_ACTION_TYPES.SET_FILTER_DESC });
  });

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setSeenMeals([]);
      return;
    }
    setSeenMeals(filterState.meals.slice(0, 20));
  }, [selectedCategories, filterState.meals, filterState.filterOption]);

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
        viewCount={seenMeals.length}
        handleGridNum={handleGridNum}
        gridNum={gridNum.value}
      />
      <Meals gridNum={gridNum.value} seenMeals={seenMeals} setSeenMeals={setSeenMeals} />
    </>
  );
};

export default Main;
