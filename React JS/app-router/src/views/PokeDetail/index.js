import { useParams } from "react-router-dom";
import { useEffect, useContext  } from "react";
import PokemonContext from "../../context/pokemons";
import PokeStates from "./components/PokeStates";
import Loading from "../../components/Loadin";
import ErrorMessage from '../../components/ErrorMessage'

const PokeDetail = () => {

    const { id } = useParams();
    const { getPokemonDetail, pokemonDetail, isLoading,  hasError, errorMessage } = useContext(PokemonContext);
   

    useEffect(() => {
         /**
         * Cada que se cargue la pantalla o cada que cambie el id
         * solicitar el detalle del pokemon.
         */
            getPokemonDetail(id).catch(null);
    },[])

    if(isLoading) return <Loading title={'Cargando pokemon...'}/>
    

    return ( 
        <div>
            {hasError ? <ErrorMessage message={errorMessage}/> : (
                <>
                    <h3 style={{ marginTop: 15, marginBottom: 15 }}>Info general</h3>
                    <p>{`name: ${pokemonDetail?.name}`}</p>
                    <p>{`Peso: ${pokemonDetail?.weight} kgs.`}</p>
                    <p>{`Altura: ${pokemonDetail?.height} cms.`}</p>
                    <div>
                        <h3 style={{ marginTop: 30, marginBottom: 15 }}>Habilidades</h3>
                        <PokeStates stats={pokemonDetail?.stats ?? []}/>
                    </div>
                </>
            )}
            
            
        </div>
     );
}
 
export default PokeDetail;