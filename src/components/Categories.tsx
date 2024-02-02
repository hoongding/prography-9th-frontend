import { useAllCategories } from '@apis/categories/queries';
import React, { useState } from 'react';
import { Chip } from './common/Chip';
import { ICategory } from '@apis/categories/types';
import styled from 'styled-components';

interface ICategories {
  selectedCategories: string[];
  handleSelectedCategory: (strCategory: string) => void;
}

const Categories = ({ selectedCategories, handleSelectedCategory }: ICategories) => {
  const { data, isLoading: categoriesLoading } = useAllCategories();

  return categoriesLoading ? (
    <div />
  ) : (
    <CategoriesContainer>
      {data?.categories.map((category: ICategory) => {
        return (
          <Chip
            key={category.idCategory}
            onClick={() => handleSelectedCategory(category.strCategory)}
            isSelected={selectedCategories.some(categoryName => categoryName === category.strCategory)}
          >
            <Chip.Label>{category.strCategory}</Chip.Label>
            <Chip.Icon />
          </Chip>
        );
      })}
    </CategoriesContainer>
  );
};

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  flex-direction: row;
`;

export default Categories;
