import React from "react";

function Favorites({ favorites }) {
  return (
    <div className="favorites">
      <h2>Favorite Cryptocurrencies</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        favorites.map((coin) => (
            coin && (
          <div key={coin.id} className="coin">
            <h1>Name: {coin.name}</h1>
            <img src={coin.image} alt={coin.name} />
            <h3>Price: {coin.current_price}</h3>
            <h3>Symbol: {coin.symbol}</h3>
          </div>
            )
        ))
      )}
    </div>
  );
}

export default Favorites;