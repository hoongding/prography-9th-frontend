import { useAllCategories } from '@apis/categories/queries';
import React, { useState } from 'react';
import { Chip } from './atom/Chip';
import { ICategory } from '@apis/categories/types';

const Categories = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const { data, isLoading: categoriesLoading } = useAllCategories();

  const handleSelectedCategory = (idCategory: string) => {
    setSelectedCategories(prev => [...prev, idCategory]);
  };

  return categoriesLoading ? (
    <div />
  ) : (
    <>
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
    </>
  );
};

export default Categories;
