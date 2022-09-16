import React from 'react';
import CartItem from '../components/CartItem';
import { useAppSelector } from '../hooks/reduxHooks';

const Cart = () => {
  const { items } = useAppSelector((state) => state.cart);

  return (
    <div className="cart-content">
      {items.length > 0 ? (
        <>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <button className="cart-content__btn">Заказать</button>
        </>
      ) : (
        <h1 className="cart-content__title">В корзине ничего нет :(</h1>
      )}
    </div>
  );
};

export default Cart;
