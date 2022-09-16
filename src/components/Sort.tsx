import React, { FC, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { setSort } from '../store/filter/filterSlise';
import { SortType } from '../store/filter/types';

const list = [
  {
    name: 'популярности (DESC)',
    sortProperty: 'rating',
  },
  {
    name: 'популярности (ASC)',
    sortProperty: '-rating',
  },
  {
    name: 'цене (DESC)',
    sortProperty: 'prise',
  },
  {
    name: 'цене (ASC)',
    sortProperty: '-prise',
  },
  {
    name: 'алфавиту (DESC)',
    sortProperty: 'name',
  },
  {
    name: 'алфавиту (ASC)',
    sortProperty: '-name',
  },
];

const Sort: FC = () => {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector((state) => state.filter);
  const [open, setOpen] = useState<boolean>(false);
  const squareBoxRef = useRef<HTMLDivElement>(null);

  const clickOutsidehandler = () => {
    setOpen(false);
  };

  useOnClickOutside(squareBoxRef, clickOutsidehandler);

  const onClickListItem = (obj: SortType) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  return (
    <div ref={squareBoxRef} className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(true)}>{sort.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((item, i) => (
              <li
                key={i}
                className={item.sortProperty === sort.sortProperty ? 'active' : ''}
                onClick={() => onClickListItem(item)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
