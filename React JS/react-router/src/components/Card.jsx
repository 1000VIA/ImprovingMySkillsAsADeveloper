import {useState, useEffect} from "react";

const Card = (props) => {

    const [state, setState] = useState({ user: '' })

    useEffect(() => {
        let user = props.match.params.user;
        setState({ user })
    },[props.match.params.user])

    const { user } = state;

    

    return(
        <div className='ui raised very padded tex container segment' style={{marginTop:'80px'}}>
            <h3 className ='iu header'> { user } </h3>
        </div>
    )

}
export default Card;