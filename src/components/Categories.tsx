import { useAllCategories } from '@apis/categories/queries';
import React, { useState } from 'react';
import { Chip } from './atom/Chip';
import { ICategory } from '@apis/categories/types';
import styled from 'styled-components';

const Categories = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const { data, isLoading: categoriesLoading } = useAllCategories();

  const handleSelectedCategory = (idCategory: string) => {
    setSelectedCategories(prev =>
      !prev.includes(idCategory) ? [...prev, idCategory] : prev.filter(categoryId => categoryId !== idCategory)
    );
  };

  return categoriesLoading ? (
    <div />
  ) : (
    <CategoriesContainer>
      {data?.categories.map((category: ICategory) => {
        return (
          <Chip
            key={category.idCategory}
            onClick={() => handleSelectedCategory(category.idCategory)}
            isSelected={selectedCategories.some(categoryId => categoryId === category.idCategory)}
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
