import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { CSSTransition} from 'react-transition-group';
import { Container, Navbar, Nav} from 'react-bootstrap';
import logo from './img/tai-emblem.png';
import "./css/Navbar.css";

import "./css/app.css";
import "./css/pages.css";


const routes = [{
    path: '/',
    Component: Main,
    name: "home",
    exact: true
},
{
    path: '/portfolio',
    Component: Portfolio,
    name: "portfolio",
    exact: true
}, 
{
    path: '/contact',
    Component: Contact,
    name: "contact",
    exact: true
}
]

const App = () => {

    return(
        <div>
            <Router>
                {/* {   siteRoutes.map(({path, Component}) => (
                <Route key={path} path={path}>
                <Component />
                </Route>
                ))} */}
                <div className="App">
                <NavBar routes={routes} />
                <Container className='container'>
                   { routes.map(({path, Component}) => (
                           <Route key={path} exact path={path}>
                               {({match})=>(
                                   <CSSTransition
                                   in={match != null}
                                   timeout={300}
                                   classNames={'page'}
                                   unmountOnExit
                                   >
                                       <div className="page">
                                           <Component />
                                       </div>
                                   </CSSTransition>
                               )}
                           </Route>
                   ))}
                </Container>
                </div>
            </Router>  
        </div>
    )
}

export default App;