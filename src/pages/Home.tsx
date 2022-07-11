import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Categories from '../components/Categories';
import RollItem from '../components/RollItem';
import Skeleton from '../components/RollItem/Skeleton';
import Sort from '../components/Sort';
import { setCategoryId } from '../store/slises/filtersSlise';
import { selectRolls, fetchRolls } from '../store/slises/rollsSlise';
import { RotState, useAppDispatch } from '../store/store';

const Home = () => {
  const dispatch = useAppDispatch();
  const categoryId = useSelector((state: RotState) => state.filter.categoryId);
  const sortyType = useSelector((state: RotState) => state.filter.sort.sortProperty);
  const { items, status } = useSelector(selectRolls);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const fetchItems = async () => {
    const order = sortyType.includes('-') ? 'asd' : 'desc';
    const sortBy = sortyType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    dispatch(
      fetchRolls({
        order,
        sortBy,
        category,
      }),
    );
  };

  useEffect(() => {
    fetchItems();
  }, [categoryId, sortyType]);

  return (
    <>
      <div className="contant__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />

        <Sort />
      </div>

      <div className="contant-items">
        {status === 'error' ? (
          <div>Возникла ошибка в запросе, приносим извинения</div>
        ) : status === 'loading' ? (
          [...new Array(4)].map((_, i) => <Skeleton key={i} />)
        ) : (
          items.map((item) => <RollItem key={item.id} {...item} />)
        )}
      </div>
    </>
  );
};

export default Home;
