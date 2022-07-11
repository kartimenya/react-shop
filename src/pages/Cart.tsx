import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { selectCurt } from '../store/slises/cartSlise';

const Cart = () => {
  const { items } = useSelector(selectCurt);

  return (
    <div>
      {items.map((item: any) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;
