import console from 'console';
import React, { useState } from 'react';

const Categories = () => {
  const [activeId, setactiveId] = useState(0);

  const arr = ['Все', 'Хосо Маки', 'Маки', 'Урамаки', 'Опаленные', 'Теплые Роллы'];

  return (
    <div className="categories">
      <ul>
        {arr.map((item, id) => (
          <li onClick={() => setactiveId(id)} className={activeId == id ? 'active' : ''} key={id}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
