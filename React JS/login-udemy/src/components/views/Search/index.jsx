import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBox from "./components/SearchBox";
import './style.css';
import SearchResult from './components/SearchResult';

const Search = () => {

    const [isAtTop, setisAtTop] = useState(false);
    const [results, setResult] = useState([]);
    const [data, setData] = useState([]);

    useEffect(()=> {
        const getUser = async () => {
            try {
                /*const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();*/
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
                setData(data)
            } catch (error) {
                console.error(error);
            }
            
        }
        getUser().catch(null);
    },[])

    const handleClouseSearch = () => {
        setisAtTop(false);
        setResult([]);
    };
    const handleSearchClick = (searchText) => {
        setisAtTop(true);
        if (data?.length) {
            const searchTextMinus = searchText.toLowerCase();
            const filterData = data.filter((value) =>  (
                    value.name.toLowerCase().includes(searchTextMinus) ||
                    value.phone.toLowerCase().includes(searchTextMinus) ||
                    value.email.toLowerCase().includes(searchTextMinus) ||
                    value.username.toLowerCase().includes(searchTextMinus)
                ) 
            );
            setResult(filterData);
        }
    };
    return ( 
        <div className={`search ${isAtTop ? 'search--top' : 'search--center'}`}>
            <SearchBox 
            onSearch={handleSearchClick} 
            onClose={handleClouseSearch} 
            isSearching={isAtTop}/>
            <SearchResult 
            results={results} 
            isSearching={isAtTop}/>
        </div>
     );
}
 
export default Search;