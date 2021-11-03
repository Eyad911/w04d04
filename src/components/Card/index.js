import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const Card = () => {
  const [pokemon, setPokemon] = useState([]);
  const { id } = useParams();

  
  const infoId = pokemon.find((item) => {
    return item.id === Number(id);
  });

  useEffect(() => {
    getPokemon();
  
  }, []);
  
  const getPokemon = async ()=>{
     const resp = await axios.get("https://api.pokemontcg.io/v2/cards?pageSize=10");
     setPokemon(resp.data.data);
  console.log(resp.data.data);
  }
  return (
    <div className="cardsDiv">
      <h1>{infoId.resp.data.data.name }</h1>
      <img src={infoId.img} alt="infopic" />
    </div>
  );
};
