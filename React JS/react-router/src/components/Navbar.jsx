import {Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props)=> {

    // setTimeout(()=>{
    //     props.history.push('/about');
    // }, 3000)

    return(
        <nav className='ui raised very padded segment'>
            <a href="/" className='ui teal inverted segment'>Milvia</a>
            <div className='ui right floated header'>
                <button className='ui button'><Link to="/">Home</Link></button>
                <button className='ui button'><NavLink to="/about">About</NavLink></button>
                <button className='ui button'><NavLink to="/contact">Contact</NavLink></button>
            </div>
        </nav>
    )
}

export default withRouter(Navbar) ;