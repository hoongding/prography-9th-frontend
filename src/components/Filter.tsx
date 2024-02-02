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
        <DropDown selectedItem={{ value: gridNum, label: `${gridNum}개씩 보기` }} setSelectedItem={handleGridNum}>
          <DropDown.Button />
          <DropDown.Menus>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </DropDown.Menus>
        </DropDown>
      </div>
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

export default Filter;
