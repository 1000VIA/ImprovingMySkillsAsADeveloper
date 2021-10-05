import React from "react";
import styles from './styles/buttoStyles.css'

class Button extends React.Component{

    state = {
        btn_color:'button-red'
    };

    onClick = (event) => {
        this.setState({
            btn_color:'button-grey'
        })
    }

    render(){
        return (
        <div>
            <button 
                onClick={this.onClick}
                className={this.state.btn_color}>
                Click me!
            </button>
        </div>
   )}

}
export default Button;