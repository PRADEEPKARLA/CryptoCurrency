import React from "react";

 function Coin({name, image, current_price
     , symbol , addToFavorites}){
    //  function Coin({coin,addToFavorites}){
    //     const {name, image, current_price,symbol} =coin;
     
    return(
        <div className="coin">
            <h1> Name:{name}</h1>
             <img src={image} alt={name}/>
            <h3>Price:{current_price}</h3>
            <h3>Symbol:{symbol}</h3>
            <button onClick={()=>addToFavorites()}>Add to Favorites</button>

        </div>
    )
}
export default Coin