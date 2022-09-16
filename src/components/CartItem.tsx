import React, { FC } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import { ICartItem } from '../models';
import { addProduct, minusProduct, removeProduct } from '../store/cart/cartSlise';

const CartItem: FC<ICartItem> = ({ name, price, count, id, imgUrl, weight }) => {
  const dispatch = useAppDispatch();

  const onClickRemove = () => {
    if (window.confirm(`Удалить ${name}?`)) {
      dispatch(removeProduct(id));
    }
  };

  const onClickPlus = () => {
    dispatch(
      addProduct({
        id,
      }),
    );
  };

  const onClickMinus = () => {
    dispatch(minusProduct(id));
  };

  return (
    <div className="cart-item">
      <div className="cart-item__left">
        <img className="cart-item__img" src={imgUrl} alt="" />
        <div className="cart-item__box">
          <div className="cart-item__name">{name}</div>
          <p className="cart-item__desc">{weight} гр.</p>
        </div>
      </div>
      <div className="cart-item__right">
        <div className="cart-item__count">
          <button onClick={onClickMinus}>-</button>
          <span>{count}</span>
          <button onClick={onClickPlus}>+</button>
        </div>
        <div className="cart-item__price">{(price * count).toFixed(1)} руб.</div>
        <div className="cart-item__remove" onClick={onClickRemove}>
          <svg
            width="26px"
            height="26px"
            viewBox="0 0 36 36"
            version="1.1"
            preserveAspectRatio="xMidYMid meet">
            <path d="M19.61,18l4.86-4.86a1,1,0,0,0-1.41-1.41L18.2,16.54l-4.89-4.89a1,1,0,0,0-1.41,1.41L16.78,18,12,22.72a1,1,0,1,0,1.41,1.41l4.77-4.77,4.74,4.74a1,1,0,0,0,1.41-1.41Z"></path>
            <path d="M18,34A16,16,0,1,1,34,18,16,16,0,0,1,18,34ZM18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
