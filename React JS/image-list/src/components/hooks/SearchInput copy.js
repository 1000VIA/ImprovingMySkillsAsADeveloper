import { useState } from "react";

const SearchInput = (props) => {


   const [state, setState] = useState('');

  

   const onFormSubmit=(event)=>{
       event.preventDefault();
       props.onSearchSubmit(state);
   }

        return(
            <div className='ui segment'>
                <form onSubmit={onFormSubmit} className='ui form'>
                    <div className='field'>
                        <div className='ui massive icon input'>
                            <input 
                            type='text' 
                            placeholder='search...' 
                            onChange={(event)=> setState(event.target.value)}
                            value={state}/>
                            <i className='search icon'></i>
                        </div>
                    </div>
                </form>
            </div>
        )
}

export default SearchInput;