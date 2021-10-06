import React from "react";
import axios from 'axios'
import SearchInput from "./SearchInput";
import ImageList from "./ImageList";


class App extends React.Component{

    state = {images: [] }

     onSearchSubmit = async (entry) =>{
      const response = await  axios.get(`https://pixabay.com/api/?key=13686780-fc1d18fee3c0d5d48ba142d9c&q=${entry}&image_type=photo`);
      this.setState({images:response.data.hits});
      console.log(this.state.images, 'n');
    }

    render(){
        return(
        <div className='ui container' style={{marginTop:'30px'}}>
            <SearchInput 
              onSearchSubmit={this.onSearchSubmit}/>
              <ImageList images={this.state.images}/>
        </div>
    )
    }
    
}
export default App;