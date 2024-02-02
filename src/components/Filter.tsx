import { FONT_TOKEN } from '@styles/fonts';
import React, { useState } from 'react';
import styled from 'styled-components';
import { DropDown } from './common/DropDown';

interface IFilter {
  mealsCount: number;
  viewCount: number;
  handleGridNum: (value: number) => void;
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
            <DropDown.MenuItem value={2} label="2개씩 보기" />
            <DropDown.MenuItem value={4} label="4개씩 보기" />
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
