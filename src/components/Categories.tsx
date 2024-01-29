import { useAllCategories } from '@apis/categories/queries';
import React from 'react';

const Categories = () => {
  const { data } = useAllCategories();

  return <div>Categories</div>;
};

export default Categories;
