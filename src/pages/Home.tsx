import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import RollItem from '../components/RollItem';
import Skeleton from '../components/RollItem/Skeleton';
import Sort from '../components/Sort';
import { IRoll } from '../types/IRoll';

const Home = () => {
  const [items, setItems] = useState<IRoll[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categiryId, setCategiryId] = useState<number>(0);
  const [sortyId, setsortyId] = useState<any>({
    name: 'популярности (DESC)',
    sortProperty: 'prise',
  });

  const order = sortyId.sortProperty.includes('-') ? 'asd' : 'desc';
  const sortBy = sortyId.sortProperty.replace('-', '');
  const category = categiryId > 0 ? `category=${categiryId}` : '';

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
  }, [categiryId, sortyId]);

  return (
    <>
      <div className="contant__top">
        <Categories categiryId={categiryId} onChangeCategory={(id: number) => setCategiryId(id)} />

        <Sort sortyId={sortyId} onChangeSort={(id: any) => setsortyId(id)} />
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
