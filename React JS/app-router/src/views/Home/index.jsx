import { useContext, useEffect } from "react";
import PokemonContext from '../../context/pokemons'
import PokemonList from "./components/PokemonList";
import Loading from "../../components/Loadin";
import ErrorMessage from '../../components/ErrorMessage'

const Home = () => {

    const { getPokemons, pokemons, isLoading, hasError, errorMessage } = useContext(PokemonContext);


    useEffect(()=>{
        getPokemons().catch(null);
    }, [])

    if(isLoading)return <Loading title={'Cargando resultados...'}/>

    return (
        <>
            {hasError ? <ErrorMessage message={errorMessage}/>: <PokemonList pokemons={pokemons}/> }
        </>
        
    );
}
 
export default Home;