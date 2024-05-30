
import './App.css';
import {useEffect , useState} from 'react';
import Axios from 'axios';
import Coin from './components/Coin';
import Favorites from './components/Favorites';


function App() { 
  const [listOfCoins,setListOfCoins] = useState([]);
  const [searchWord,setSearchWord] = useState("");
  const [favorites,setFavorites] = useState([]);

  
  useEffect(() =>{
  Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false").then((response) =>{
    console.log(response.data);
    setListOfCoins(response.data);
  })
  },[]);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  const addToFavorites = (coin) =>{
    console.log("adding to favorites:",coin);
    if(coin && coin.id){
    setFavorites((preFavorites) => {
      if(!preFavorites.some((favorites) => favorites.id === coin.id)){
        return [...preFavorites, coin];
      }
      return preFavorites;
    });
  }
  } ;
  return (
    <div className="App">
    <div className="cryptoHeader">
   <input type="text" placeholder="Bitcoin...." onChange={(event) => {setSearchWord(event.target.value)}}/>
    </div>
    <div className="cryptoDisplay">{filteredCoins.map((coin)=>{
      return<>
      <Coin 
      name={coin.name}
       image={coin.image} 
       current_price={coin.current_price} 
       symbol={coin.symbol}
       addToFavorites={addToFavorites}
       />
      
       </> 
    })}</div>
     <Favorites favorites={favorites}/>
    </div>
  );
}

export default App;
