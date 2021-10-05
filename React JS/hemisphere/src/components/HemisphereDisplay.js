import React from 'react';
import northernPic from '../image/NorthernHemisphere.jpg'
import southernPic from '../image/SouthernHemisphere.jpg'
import style from '../styles/Hemisphere.css'

const hemisphereConfig = {
    Northern: {
        text: 'It is northern hemispher',
        picture:northernPic
    },
    Southern: {
        text: 'It is southern hemispher',
        picture:southernPic
    }
}


const HemisphereDisplay = ({latitude}) =>{

    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const {text, picture} = hemisphereConfig[hemisphere]
    

    return(
        <div className={hemisphere}>
            <div className='ui raised tex container segment'>
                <div className='image'>
                    <img src={picture} alt="hemispher pictures"/>
                </div>
                <div className='ui teal bottom attached label'>
                   <h1>{text}</h1> 
                </div>
            </div>
        </div>
    )       
}

export default HemisphereDisplay;