import {useState} from 'react';
import './style.css'

const SearchBox = ({onSearch, onClose, isSearching}) => {
    const [searchText, setSearchText] = useState('')

    const handleSearchClick = () => {
        setSearchText('')
        onClose()
    };

    return ( 
        <div className='search-box'>
            <div className='search-box-buttons'>
                <h2 className='search-title'>Buscador de personal</h2>
                <label>
                    <input 
                    value={searchText} 
                    onChange={({ target: { value }}) => setSearchText(value)}
                    className='search-input'/>
                </label>
                <button 
                onClick={() => onSearch(searchText)} 
                className='search-button'
                disabled={!searchText.length}>
                    Buscar
                </button>
                {isSearching && <button 
                onClick={handleSearchClick} 
                className='search-button'
                disabled={!searchText.length}>
                    Cerrar
                </button>}
            </div>
        </div>
     );
}
 
export default SearchBox;