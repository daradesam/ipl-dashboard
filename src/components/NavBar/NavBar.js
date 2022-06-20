import './NavBar.css'
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <div className="navbar-wrapper">
            <Link to='/'><h1>IPL Mania</h1></Link>
            <div className='navbar-links'>
                <Link to='/about'>About Us</Link>
                <Link to='/sign-in'>Sign In</Link>
            </div>
        </div>
    )
}