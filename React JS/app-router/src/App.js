import PokemonProvider from "./context/pokemons/Provider";
import Routes from "./routes";

const App = () => {
    return ( 
        <div>
            <PokemonProvider>
                <Routes/>
            </PokemonProvider>
        </div>
     );
}
 
export default App;