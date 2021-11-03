import React from "react";
import "./style.css";
import { useState , useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";



export const Cards = () => {
    const history = useHistory()
  const [pokemon, setPokemon] = useState([]);
//   city.map((item,i)=>item.name);
const info = (id)=>{
console.log(id);
history.push(`/card/${id}`)
setPokemon();

}
useEffect(() => {
  getPokemon();

}, []);

const getPokemon = async ()=>{
   const resp = await axios.get("https://api.pokemontcg.io/v2/cards?pageSize=10");
   setPokemon(resp.data.data);
console.log(resp.data.data);
}

  return (
    <div >
        
      <div  className="cardsDiv">
      {pokemon.map((item,i)=>( 
           <div className="card" onClick={()=> info(item.id)}>
              <h1>{item.name}</h1>
              <img src={item.images.large} alt="city"/>
              
              </div>
          
        ))}
       
      </div>
    </div>
  );
};
