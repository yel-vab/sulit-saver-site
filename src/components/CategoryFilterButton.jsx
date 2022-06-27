import React from 'react';

const CategoryFilterButton = ({
  products,
  setFilteredProducts,
  categoryFilter,
  categoryButtonText,
  setCategoryHeader,
}) => {
  return (
    <button
      className={
        categoryFilter === 'all'
          ? 'col-span-2 text-sunray-50 bg-sunray-700 hover:bg-sunray-900  py-2 border-1 border-sunray-200 rounded-lg'
          : 'text-sunray-900 bg-sunray-200 hover:bg-sunray-300 py-2 border-[.1rem] border-sunray-400 rounded-lg sm:sm:w-60'
      }
      onClick={() => {
        setCategoryHeader(categoryButtonText);
        {
          categoryFilter === 'all'
            ? setFilteredProducts(products)
            : setFilteredProducts(
                products.filter((product) => {
                  return product.category === categoryFilter;
                })
              );
        }
      }}
    >
      {categoryButtonText}
    </button>
  );
};

export default CategoryFilterButton;
