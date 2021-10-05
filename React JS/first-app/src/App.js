const App = () => {

    const getButtonText = 'Hello word';

    return(
        <div>
            <label  htmlFor='name' className='label'>Enter e-mail</label>
            <input id='name' type='text'/>
            <button 
                style={{backgroundColor:'red', color:'white'}}>
                {getButtonText}
            </button>
        </div>
    )
}
export default App;