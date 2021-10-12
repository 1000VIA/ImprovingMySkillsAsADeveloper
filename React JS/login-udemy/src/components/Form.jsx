import { useState } from "react";
import Login from "./Login";
import './Styles.css'

const Form = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogged, setIsLogged] = useState(false);

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = ({target: {value}}) => setPassword(value);
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    const handleLoginClick = () => {
        setIsLogged(true)
    }

    return(
        <div className='form'>
          <form onSubmit={handleFormSubmit}>
            <h2>Iniciar sesión</h2>
            <div className='labels'>
                <label className='email'>
                    Correo
                </label>
                <input 
                    type='email' 
                    value={email} 
                    onChange={handleEmailChange} 
                    placeholder='Correo'/>
                <label className='password'>
                    Contraseña
                </label> 
                <input 
                    type='password' 
                    value={password} 
                    onChange={handlePasswordChange}
                    placeholder='Contraseña'/>
                <button 
                type='submit'
                onClick={handleLoginClick}>
                    Iniciar sesion
                </button>
                {isLogged && <Login/>}
            </div>
          </form>  
        </div>
    )
}

export default Form;