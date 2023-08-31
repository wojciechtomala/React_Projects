import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
      console.log(coins)
    }).catch(error => console.log(error));
  },[]);
  
  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1>Search a currency</h1>
        <form>
          <input onChange={handleChange} type="text" placeholder='Search' className='coin-input'/>
        </form>
      </div>
      <div className='coin-list-container'>
        {filteredCoins.map(coin => {
          return (
            <Coin 
              key={coin.id} 
              name={coin.name} 
              image={coin.image} 
              symbol={coin.symbol}
              volume={coin.total_volume}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              marketcap={coin.market_cap}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
