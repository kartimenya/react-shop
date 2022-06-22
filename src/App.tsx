import { FC } from 'react';
import Header from './components/Header';
import Home from './pages/Home';

const App: FC = () => {
  return (
    <div className="wrapp">
      <Header />
      <div className="contant">
        <div className="container">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
