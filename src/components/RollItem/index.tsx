import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { IRoll } from '../../models';
import { addProduct } from '../../store/cart/cartSlise';

const RollItem: FC<IRoll> = ({ name, price, imgUrl, id, ingredients, weight }) => {
  const dispatch = useAppDispatch();
  const rollItem = useAppSelector((state) => state.cart.items.find((obj) => obj.id === id));

  const addedCount = rollItem ? rollItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
      imgUrl,
      ingredients,
      weight,
    };
    dispatch(addProduct(item));
  };
  return (
    <div className="card">
      <div className="card__img">
        <img src={imgUrl} alt="" />
      </div>
      <div className="card__content">
        <h3 className="card__name">{name}</h3>
        <p className="card__desc">{ingredients}</p>

        <div className="card__row">
          <p>{price} руб.</p>
          <p>{weight} гр.</p>
        </div>
        <button onClick={onClickAdd} className="card__btn">
          {addedCount > 0 && <span className="card__count">{addedCount}</span>}{' '}
          <span>В корзину</span>
        </button>
      </div>
    </div>
  );
};

export default RollItem;
