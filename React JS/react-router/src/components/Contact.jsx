import { Link } from 'react-router-dom'
import Modal from './Modal'

const Contact = (props)=> {

    // const OpenModal = () => {
    //     console.log('Open Modal');
    // }

      return(
        <div>
            <Modal/>
            <div className='ui raised very padded tex container segment' style={{marginTop:'20px'}}>
                <Link to='/dayana' className ='iu header'>Dayana</Link>
                <p>Hija</p>
            </div>
            <div className='ui raised very padded tex container segment' style={{marginTop:'20px'}}>
                <Link to='/henry' className ='iu header'>Henry</Link>
                <p>Esposo</p>
            </div>
            <div className='ui raised very padded tex container segment' style={{marginTop:'20px'}}>
                <Link to='/rosa' className ='iu header'>Rosa</Link>
                <p>Mamá</p>
            </div>
            <div className='ui raised very padded tex container segment' style={{marginTop:'20px'}}>
                <Link to='/carlos' className ='iu header'>Carlos</Link>
                <p>Hermano</p>
            </div>
            <div className='ui raised very padded tex container segment' style={{marginTop:'20px'}}>
                <Link to='/nana' className ='iu header'>Johana</Link>
                <p>Hermana</p>
            </div>
            <div className='ui raised very padded tex container segment' style={{marginTop:'20px'}}>
                <Link to='/pily' className ='iu header'>Pily</Link>
                <p>Hermana</p>
            </div>
        </div>
    )

}

export default Contact;