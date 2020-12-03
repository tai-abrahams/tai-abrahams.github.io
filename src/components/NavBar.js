import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import logo from '../img/tai-emblem.png';
import { NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';



const NavBar = ({ routes }) => {
 
    const externalLink = (route)=>{
        window.open(`${route}`);
    }

    return(
        <div className="row col-12 ml-0 mr-0 h-25 p-0">
           <Navbar className="col-10 mr-auto ml-auto">
                    <Navbar.Brand>
                        <img src={logo} />
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        {routes.map( route => (
                            <Nav.Link
                                className={"text-dark"}
                                key={route.path}
                                as={NavLink}
                                target={route.target}
                                to={route.path}
                                activeClassName="active"
                                exact
                            >
                                {route.name}
                            </Nav.Link>
                            ))}
                    </Nav>
                            <a className="text-dark btn border-0" href="https://www.github.com/tai-abrahams" target="_blank" style={{textDecoration: 'none !important', outline: 'none !important' }}>github</a>
            </Navbar>
        </div>
    )
}

export default NavBar;