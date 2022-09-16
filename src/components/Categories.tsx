import React, { FC } from 'react';

interface ICategories {
  onChangeCategory: (id: number) => void;
  value: number;
}

const Categories: FC<ICategories> = ({ onChangeCategory, value }) => {
  const arr = ['Все', 'Хосо Маки', 'Маки', 'Урамаки', 'Опаленные', 'Теплые Роллы'];

  return (
    <div className="categories">
      <ul>
        {arr.map((item, id) => (
          <li
            onClick={() => onChangeCategory(id)}
            className={value === id ? 'active' : ''}
            key={id}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
