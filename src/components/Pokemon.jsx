import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const { pokemonId } = useParams()
    const [ pokemonInfo, setPokemonInfo] = useState([]);
    useEffect(() => {
      axios({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
      })
        .then((response) => {
          setPokemonInfo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [setPokemonInfo]);
    return ( 
        <div>
            
        </div>
     );
}
 
export default Pokemon;