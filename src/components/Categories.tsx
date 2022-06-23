import React, { FC, useState } from 'react';

interface ICategories {
  onChangeCategory: (id: number) => void;
  categiryId: number;
}

const Categories: FC<ICategories> = ({ onChangeCategory, categiryId }) => {
  const arr = ['Все', 'Хосо Маки', 'Маки', 'Урамаки', 'Опаленные', 'Теплые Роллы'];

  return (
    <div className="categories">
      <ul>
        {arr.map((item, id) => (
          <li
            onClick={() => onChangeCategory(id)}
            className={categiryId == id ? 'active' : ''}
            key={id}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
