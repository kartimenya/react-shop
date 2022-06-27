import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../components/Categories';
import RollItem from '../components/RollItem';
import Skeleton from '../components/RollItem/Skeleton';
import Sort from '../components/Sort';
import { setCategoryId } from '../store/filtersSlise';
import { IRoll } from '../types/IRoll';

const Home = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state: any) => state.filter.categoryId);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const [items, setItems] = useState<IRoll[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sortyType, setsortyId] = useState<any>({
    name: 'популярности (DESC)',
    sortProperty: 'prise',
  });

  const order = sortyType.sortProperty.includes('-') ? 'asd' : 'desc';
  const sortBy = sortyType.sortProperty.replace('-', '');
  const category = categoryId > 0 ? `category=${categoryId}` : '';

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62b21363c7e53744afc73214.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, [categoryId, sortyType]);

  return (
    <>
      <div className="contant__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />

        <Sort value={sortyType} onChangeSort={(id: any) => setsortyId(id)} />
      </div>

      <div className="contant-items">
        {isLoading
          ? [...new Array(4)].map((_, i) => <Skeleton key={i} />)
          : items.map((item) => <RollItem key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default Home;
