import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const Cart = () => {
  const items = useSelector((state: any) => state.cart.items);

  return (
    <div>
      {items.map((item: any) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;
