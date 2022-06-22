import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import RollItem from '../components/RollItem';
import Skeleton from '../components/RollItem/Skeleton';
import Sort from '../components/Sort';
import { IRoll } from '../types/IRoll';

const Home = () => {
  const [items, setItems] = useState<IRoll[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://62b21363c7e53744afc73214.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="contant__top">
        <Categories />

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
