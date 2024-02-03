import { FONT_TOKEN } from '@styles/fonts';
import React, { useState } from 'react';
import styled from 'styled-components';
import { DropDown } from './common/DropDown';
import { FILTER, FILTER_ACTION_TYPES, useFilterDispatchContext, useFilterStateContext } from '@context/filterContext';

interface IFilter {
  mealsCount: number;
  viewCount: number;
  handleGridNum: (value: number) => void;
  gridNum: number;
}

const MEALS_FILTER_OPTIONS: Record<number, { value: number; label: string }> = {
  0: { value: FILTER.NEW, label: '  최신순  ' },
  1: { value: FILTER.ASC, label: '이름 오름차순' },
  2: { value: FILTER.DESC, label: '이름 내림차순' },
};

const Filter = ({ mealsCount, viewCount, handleGridNum, gridNum }: IFilter) => {
  const filterDispatch = useFilterDispatchContext();
  const { filterState } = useFilterStateContext();

  const handleFilterOption = (value: number) => {
    if (value === FILTER.NEW) filterDispatch({ type: FILTER_ACTION_TYPES.SET_FILTER_NEW });
    if (value === FILTER.ASC) filterDispatch({ type: FILTER_ACTION_TYPES.SET_FILTER_ASC });
    if (value === FILTER.DESC) filterDispatch({ type: FILTER_ACTION_TYPES.SET_FILTER_DESC });
  };

  return (
    <FilterContainer>
      {`${viewCount} / ${mealsCount} 개 조회`}
      <FilterDropDownContainer>
        <div>
          <DropDown selectedItem={MEALS_FILTER_OPTIONS[filterState.filterOption]} setSelectedItem={handleFilterOption}>
            <DropDown.Button />
            <DropDown.Menus>
              <DropDown.MenuItem value={FILTER.NEW} label="  최신순  " />
              <DropDown.MenuItem value={FILTER.ASC} label="이름 오름차순" />
              <DropDown.MenuItem value={FILTER.DESC} label="이름 내림차순" />
            </DropDown.Menus>
          </DropDown>
        </div>

        <div>
          <DropDown selectedItem={{ value: gridNum, label: `${gridNum}개씩 보기` }} setSelectedItem={handleGridNum}>
            <DropDown.Button />
            <DropDown.Menus>
              <DropDown.MenuItem value={2} label="2개씩 보기" />
              <DropDown.MenuItem value={4} label="4개씩 보기" />
            </DropDown.Menus>
          </DropDown>
        </div>
      </FilterDropDownContainer>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  ${FONT_TOKEN['Body1-16Bd']}
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
`;

const FilterDropDownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

export default Filter;
