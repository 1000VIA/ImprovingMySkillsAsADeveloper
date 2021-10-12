import {  Component } from "react";

class StateClass extends Component  {

    constructor(props){
        super(props)
        console.log('constructor');
        this.state = {
            name: '',
        };
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentDidUpdate(preProps, prevState, snapShop){
        console.log('componentDidUpdate');
    }

     handleChangeInput = (event) =>{
        this.setState({name: event.target.value})
    }

    shouldComponentUpdate(){
        return true;
    }

    getSnapshotBeforeUpdate(preProps, prevState){
        console.log('preProps, prevState');
    }
    
    render(){
        return(
            <div>
               {/* <input value={this.state.name} onChange={({target: {value}}) => this.setState({name: value})}/> */}
               <input value={this.state.name} onChange={(value) => this.setState({name: value.target.value})}/>
               {/* <input value={this.state.name} onChange={this.handleChangeInput}/> */}
            </div>
        ) 
  }

    
}

export default StateClass;