import React from 'react'
import HemisphereDisplay from './components/HemisphereDisplay';

class App extends React.Component{

    state = { latitude: null, errorMessage: '' }//Solo inicializa el objeto state.

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (postion) => {
                this.setState({latitude: postion.coords.latitude})
            },
            (error) => {
                this.setState({errorMessage: error.message})
            }
        );
    }
    render(){
        if(this.state.errorMessage && !this.state.latitude){
            return <div> {this.state.errorMessage} </div>            
        }
        if(!this.state.errorMessage && this.state.latitude){
            return <div> <HemisphereDisplay latitude={this.state.latitude} /> </div> 
        }else{
            return <div>Loading...</div>
        }
    }
}

export default App; 
 