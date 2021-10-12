import { useState } from "react";

const StateHook = () =>  {

    //Diferentes formas de crear estados.
    const [name, setName] = useState('Milvia');
    const [age] = useState();
    const [, setSomething] = useState('Hey!');

   const handleHeyClick = () => {
       setName('1000VIA')
   }

    return(
        <div>
            <h2>Hola {name}</h2>
            <p>{age}</p>
            <button onClick={handleHeyClick}>Click me</button>
        </div>
    )
}

export default StateHook;