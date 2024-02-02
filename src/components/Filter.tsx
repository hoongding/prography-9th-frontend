import { FONT_TOKEN } from '@styles/fonts';
import React, { useState } from 'react';
import styled from 'styled-components';
import { DropDown } from './common/DropDown';

interface IFilter {
  mealsCount: number;
  viewCount: number;
  handleGridNum: (num: number) => void;
  gridNum: number;
}

const Filter = ({ mealsCount, viewCount, handleGridNum, gridNum }: IFilter) => {
  return (
    <FilterContainer>
      {`${viewCount} / ${mealsCount} 개 조회`}
      <div>
        <DropDown selectedItem={gridNum} setSelectedItem={handleGridNum}>
          <DropDown.Button />
        </DropDown>
      </div>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  ${FONT_TOKEN['Body1-16Bd']}
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;

export default Filter;
