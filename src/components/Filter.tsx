import { FONT_TOKEN } from '@styles/fonts';
import React, { useState } from 'react';
import styled from 'styled-components';

interface IFilter {
  mealsCount: number;
  viewCount: number;
}

const Filter = ({ mealsCount, viewCount }: IFilter) => {
  return <FilterContainer>{`${viewCount} / ${mealsCount} 개 조회`}</FilterContainer>;
};

const FilterContainer = styled.div`
  ${FONT_TOKEN['Body1-16Bd']}
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;

export default Filter;
