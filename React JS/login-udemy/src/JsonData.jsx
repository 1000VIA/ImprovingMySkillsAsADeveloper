import { useState, useEffect } from 'react';

const jsonData = [{
    key:'1',
    name:'Milvia',
  },{
    key:'2',
    name:'Dayana',
  },{
    key:'3',
    name:'Henry',
  },
  {
    key:'4',
    name:'Pily',
  },
  ]

const JsonData = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=>{
            setIsLoading(false);
        },4000)
    }, [])

    const renderData = () => {
        return jsonData?.map((data, index)=> (
            <div key={index}>
                <p>{data.name}</p>
            </div>  
            ))
    }
    return (  
        <div>
            {isLoading ? <h2>Loading...</h2> : renderData()}
        </div>
    );
}
 
export default JsonData;