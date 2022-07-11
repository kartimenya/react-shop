import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../store/slises/cartSlise';
import { IRoll } from '../../types/IRoll';

const RollItem: FC<IRoll> = ({ name, price, imgUrl, id }) => {
  const dispatch = useDispatch();
  const rollItem = useSelector((state: any) => state.cart.items.find((obj: any) => obj.id === id));

  const addedCount = rollItem ? rollItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id: id,
      name,
      price,
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
        <p className="card__desc">Филе лосося, сливочный сыр</p>

        <div className="card__row">
          <p>{price}руб.</p>
          <p>285 гр.</p>
        </div>
        <button onClick={onClickAdd} className="card__btn">
          {addedCount > 0 && addedCount} <span>В корзину</span>
        </button>
      </div>
    </div>
  );
};

export default RollItem;
