import { useEffect, useState } from "react";


const StateUseEffect = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    const handleChangeInput = (event) =>{
        setName(event.target.value);
    }
    /** componentDidUpdate */
    useEffect(()=> {
       console.log('didUpdate effect');
    })

    /** componentDidMount */
    useEffect(()=> {
        console.log('didMount effect');
        return () => {
            console.log('willUnmound');
        }
     },[])

     useEffect(()=> {
        console.log('name o age cambio');
     },[name, age]);


    return(
        <div>
            {/* <input value={name} onChange={({target: {value}}) => setName(value)}/> */}
            <input value={name} onChange={handleChangeInput}/>
            <br/>
            <br/>
            <input value={age} onChange={({target: {value}}) => setAge(value)}/>
        </div>
    )

}

export default StateUseEffect;