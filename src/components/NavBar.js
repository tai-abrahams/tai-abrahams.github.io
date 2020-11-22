import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import "../css/Navbar.css";
import Main from './Main'
import Portfolio from './Portfolio'
import Contact from './Contact'
import logo from '../img/tai-emblem.png';
import { NavLink} from 'react-router-dom'



const NavBar = ({ routes }) => {
 

    return(
        <div className="w-100 p-0">
           <Navbar className="">
                    <Navbar.Brand className="navbar__brand" >
                        <img src={logo} />
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        {routes.map( route => (
                            <Nav.Link
                                key={route.path}
                                as={NavLink}
                                to={route.path}
                                activeClassName="active"
                                exact
                            >
                                {route.name}
                            </Nav.Link>
                            ))}
                    </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar;