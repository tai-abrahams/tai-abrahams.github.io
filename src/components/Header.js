import React from "react";
import "../css/Header.css"
import Logo from "../img/tai-emblem.png"
import { Container, Navbar, Nav } from 'react-bootstrap'
const Header = () => {
    return(
        <div>
            <Navbar className="app__navbar">
                <Navbar.Brand href="#" className="app__navbar__brand">
                <img src={logo} />
            </Navbar.Brand>
            <Nav>
                <Nav.Link>
                    home
                </Nav.Link>
                <Nav.Link>
                    portfolio
                </Nav.Link>
                <Nav.Link>
                    contact
                </Nav.Link>
            </Nav>
</Navbar>
        </div>
    )    
}

export default Header;