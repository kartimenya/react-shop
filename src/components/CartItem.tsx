import { FC } from 'react';

interface ICartItem {
  name: string;
  price: number;
}
const CartItem: FC<ICartItem> = ({ name, price }) => {
  return (
    <div className="cart-item">
      <img className="cart-item__img" src="assets/item-1.jpg" alt="" />
      <div className="cart-item__box">
        <div className="cart-item__name">{name}</div>
        <p className="cart-item__desc">{price}</p>
      </div>
      <div className="cart-item__count">
        <button>+</button>
        <span>1</span>
        <button>-</button>
      </div>
      <div className="cart-item__price">{price}</div>
    </div>
  );
};

export default CartItem;
