import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/cartSlise';
import { IRoll } from '../../types/IRoll';

const RollItem: FC<IRoll> = ({ name, prise, imgUrl }) => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item = {
      name,
      prise,
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
          <p>{prise}руб.</p>
          <p>285 гр.</p>
        </div>
        <button onClick={onClickAdd} className="card__btn">
          В корзину
        </button>
      </div>
    </div>
  );
};

export default RollItem;
