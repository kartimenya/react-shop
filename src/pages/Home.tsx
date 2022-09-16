import React, { useEffect } from 'react';
import Categories from '../components/Categories';
import RollItem from '../components/RollItem';
import Skeleton from '../components/RollItem/Skeleton';
import Sort from '../components/Sort';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { setCategoryId } from '../store/filter/filterSlise';
import { fetchRolls } from '../store/roll/rollSlise';

const Home = () => {
  const dispatch = useAppDispatch();
  const categoryId = useAppSelector((state) => state.filter.categoryId);
  const sortyType = useAppSelector((state) => state.filter.sort.sortProperty);
  const { rolls, loading } = useAppSelector((state) => state.roll);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
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

    fetchItems();
  }, [categoryId, sortyType, dispatch]);

  return (
    <>
      <div className="contant__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />

        <Sort />
      </div>

      <div className="contant-items">
        {loading === 'error' ? (
          <div>Возникла ошибка в запросе, приносим извинения</div>
        ) : loading === 'loading' ? (
          [...new Array(4)].map((_, i) => <Skeleton key={i} />)
        ) : (
          rolls.map((item) => <RollItem key={item.id} {...item} />)
        )}
      </div>
    </>
  );
};

export default Home;
