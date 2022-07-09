import axios from 'axios';
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
  const sortyType = useSelector((state: any) => state.filter.sort.sortProperty);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const [items, setItems] = useState<IRoll[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const order = sortyType.includes('-') ? 'asd' : 'desc';
    const sortBy = sortyType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    setIsLoading(true);

    axios
      .get(
        `https://62b21363c7e53744afc73214.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [categoryId, sortyType]);

  return (
    <>
      <div className="contant__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />

        <Sort />
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
