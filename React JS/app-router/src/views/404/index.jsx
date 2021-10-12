import { useContext } from "react";
import PokemonContext from '../../context/pokemons'

const FourOFour = () => {
    const { pokemons } = useContext(PokemonContext);

    console.log(pokemons);
    return ( 
        <div>
            <p>No se encontró el la página</p>
        </div>
     );
}
 
export default FourOFour;