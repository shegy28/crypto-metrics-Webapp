import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoins } from '../redux/cryptoHome/cryptoHome';

const Home = () => {
    const coins = useSelector((state) => state.coins);
    const dispatch = useDispatch();
    console.log(coins);
    
    useEffect(() => {
        dispatch(getCoins());
    }, [dispatch]);

  return (
    <div>Home</div>
  )
}

export default Home