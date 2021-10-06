import { useEffect, useState } from 'react'
import axios from 'axios'
import SearchInput from './SearchInput copy'
import ImageList from '../hooks/ImageList copy';

const App = ()=>{

  const [images, setImages] = useState({images: []});

  const onSearchSubmit = async (entry) => {
    const response = await axios.get(`https://pixabay.com/api/?key=13686780-fc1d18fee3c0d5d48ba142d9c&q=${entry}&image_type=photo`);
    setImages({images:response.data.hits});
  }

  // useEffect(() => {
  //   onSearchSubmit('hola');
  // })
  

    return(
        <div className='ui container' style={{marginTop:'30px'}}>
            <SearchInput 
            onSearchSubmit={onSearchSubmit}/>
            <ImageList images={images.images}/>
        </div>
    )
}
export default App;