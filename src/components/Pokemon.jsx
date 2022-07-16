import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const { pokemonName } = useParams()
    const [ pokemonInfo, setPokemonInfo] = useState([]);
    useEffect(() => {
      axios({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
      })
        .then((response) => {
          setPokemonInfo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [setPokemonInfo]);
    return ( 
      <div className="flex justify-center font-pokemon h-full">
      <div className="w-[50rem] text-center flex flex-wrap justify-center items-center my-36">
        <p className='text-3xl w-full mx-auto'>{ pokemonName }</p>
        <img src={`https://img.pokemondb.net/sprites/yellow/normal/${pokemonName}.png`} alt="" className="w-1/2 md:w-1/3 p-5" />
      </div>
    </div>
     );
}
 
export default Pokemon;