import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, minusProduct, removeProduct } from '../store/slises/cartSlise';

interface ICartItem {
  name: string;
  price: number;
  count: number;
  id: number;
}
const CartItem: FC<ICartItem> = ({ name, price, count, id }) => {
  const dispatch = useDispatch();

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
      <img onClick={onClickRemove} className="cart-item__img" src="assets/item-1.jpg" alt="" />
      <div className="cart-item__box">
        <div className="cart-item__name">{name}</div>
        <p className="cart-item__desc">{price}</p>
      </div>
      <div className="cart-item__count">
        <button onClick={onClickPlus}>+</button>
        <span>{count}</span>
        <button onClick={onClickMinus}>-</button>
      </div>
      <div className="cart-item__price">{(price * count).toFixed(1)}</div>
    </div>
  );
};

export default CartItem;
