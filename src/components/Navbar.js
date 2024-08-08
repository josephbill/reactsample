import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
                {/* <NavLink to="/authentication">Authetication</NavLink> */}
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/authentication">Authentication Facebook</Link></li>
                <li><Link to="/helloworld">Hello World</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;