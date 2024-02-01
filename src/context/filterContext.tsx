import { IMeal } from '@apis/meals/types';
import React, { createContext, useContext, useReducer } from 'react';

interface IFilterState {
  meals: IMeal[];
  filterOption: 'new' | 'asc' | 'desc';
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
  filterOption: 'new',
};

export const FILTER_ACTION_TYPES = {
  ADD_MEALS: 'ADD_MEALS',
  SET_FILTER_NEW: 'SET_FILTER_NEW',
  SET_FILTER_ASC: 'SET_FILTER_ASC',
  SET_FILTER_DESC: 'SET_FILTER_DESC',
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
        filterOption: 'new',
      };

    case FILTER_ACTION_TYPES.SET_FILTER_ASC:
      return {
        meals: state.meals.sort((a, b) => a.strMeal.localeCompare(b.strMeal)),
        filterOption: 'asc',
      };

    case FILTER_ACTION_TYPES.SET_FILTER_DESC:
      return {
        meals: state.meals.sort((a, b) => b.strMeal.localeCompare(a.strMeal)),
        filterOption: 'desc',
      };

    default:
      return { ...state };
  }
};

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, { meals: [], filterOption: 'new' });
  const isFilterChanged = JSON.stringify(filterState) !== JSON.stringify(initialState);

  return (
    <FilterStateContext.Provider value={{ filterState, isFilterChanged }}>
      <FilterDispatchContext.Provider value={filterDispatch}>{children}</FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
  );
};
