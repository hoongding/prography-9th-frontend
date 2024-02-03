import { IMeal } from '@apis/meals/types';
import React, { createContext, useContext, useReducer } from 'react';

interface IFilterState {
  meals: IMeal[];
  filterOption: (typeof FILTER)[keyof typeof FILTER];
}

interface IFilterStateContext {
  filterState: IFilterState;
  isFilterChanged: boolean;
}
const FilterStateContext = createContext<IFilterStateContext | null>(null);
const FilterDispatchContext = createContext<React.Dispatch<{
  type: (typeof FILTER_ACTION_TYPES)[keyof typeof FILTER_ACTION_TYPES];
  payload?: any;
}> | null>(null);

export const useFilterStateContext = () => {
  const filterStateContext = useContext(FilterStateContext);

  if (!filterStateContext) {
    throw new Error('useFilterStateContext must be used within a FilterProvider');
  }

  return filterStateContext;
};

export const useFilterDispatchContext = () => {
  const filterDispatchContext = useContext(FilterDispatchContext);

  if (!filterDispatchContext) {
    throw new Error('useFilterDispatchContext must be used within a FilterProvider');
  }

  return filterDispatchContext;
};

const initialState = {
  meals: [],
  filterOption: 0,
};

export const FILTER_ACTION_TYPES = {
  ADD_MEALS: 'ADD_MEALS',
  SET_FILTER_NEW: 'SET_FILTER_NEW',
  SET_FILTER_ASC: 'SET_FILTER_ASC',
  SET_FILTER_DESC: 'SET_FILTER_DESC',
};

export const FILTER = {
  NEW: 0,
  ASC: 1,
  DESC: 2,
};

const filterReducer = (
  state: IFilterState,
  action: {
    type: (typeof FILTER_ACTION_TYPES)[keyof typeof FILTER_ACTION_TYPES];
    payload?: string | IMeal[];
  }
): IFilterState => {
  switch (action.type) {
    case FILTER_ACTION_TYPES.ADD_MEALS:
      return {
        ...state,
        meals: action.payload as IMeal[],
      };

    case FILTER_ACTION_TYPES.SET_FILTER_NEW:
      return {
        meals: state.meals.sort((a, b) => Number(a.idMeal) - Number(b.idMeal)),
        filterOption: FILTER.NEW,
      };

    case FILTER_ACTION_TYPES.SET_FILTER_ASC:
      return {
        meals: state.meals.sort((a, b) => a.strMeal.localeCompare(b.strMeal)),
        filterOption: FILTER.ASC,
      };

    case FILTER_ACTION_TYPES.SET_FILTER_DESC:
      return {
        meals: state.meals.sort((a, b) => b.strMeal.localeCompare(a.strMeal)),
        filterOption: FILTER.DESC,
      };

    default:
      return { ...state };
  }
};

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, { meals: [], filterOption: FILTER.NEW });
  const isFilterChanged = JSON.stringify(filterState) !== JSON.stringify(initialState);

  return (
    <FilterStateContext.Provider value={{ filterState, isFilterChanged }}>
      <FilterDispatchContext.Provider value={filterDispatch}>{children}</FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
  );
};
