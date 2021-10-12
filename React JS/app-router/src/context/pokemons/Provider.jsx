import { useState } from "react";
import PokemonContext from "./index";
import apiCall from '../../api'

const PokemonProvider = ({children}) => {

    const [pokemons, setpokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState({});
    const [isLoading, setisLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const getPokemons = async () => {
        try {
            setisLoading(true);
            setErrorMessage('');
            setHasError(false);
            
            // throw new Error('hey');
            const pokemonsResult =  await apiCall({url: `https://pokeapi.co/api/v2/pokemon?limit=100`});
            setpokemons(pokemonsResult.results);

        } catch (error) {
            setpokemons([]);
            setErrorMessage('Algo ha pasado, verifica tu conexión');
            setHasError(true);
        }finally{
            setisLoading(false);
        }

    };

    const getPokemonDetail = async ( id ) => {
        if(!id ) Promise.reject('Id es requerido')
        try {
            setisLoading(true);
            setErrorMessage('');
            setHasError(false);

            const pokemonDetail =  await apiCall({ url: `https://pokeapi.co/api/v2/pokemon/${id}` });
            setPokemonDetail(pokemonDetail);
            
        } catch (error) {
            console.log(error);
            setPokemonDetail({});
            setErrorMessage('Algo ha pasado, verifica tu conexión');
            setHasError(true);
            
        }finally{
            setisLoading(false);
        }
    }

    
    return ( 
        <div>
            <PokemonContext.Provider value={{
                getPokemons, 
                pokemons, 
                getPokemonDetail,
                pokemonDetail,
                isLoading,
                hasError,
                errorMessage,
                }}>
                {children}
            </PokemonContext.Provider>
        </div>
     );
}
 
export default PokemonProvider;