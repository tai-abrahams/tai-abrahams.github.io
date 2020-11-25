import React from 'react';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition} from 'react-transition-group';
import { Container} from 'react-bootstrap';


import "./css/app.css";
import "./css/pages.css";


const routes = [{
    path: '/',
    Component: Main,
    name: "home",
    exact: true,
    target: "_self"
},
{
    path: '/portfolio',
    Component: Portfolio,
    name: "portfolio",
    exact: true,
    target: "_self"
}, {
    path:'https://github.com/tai-abrahams',
    name: "github",
    exact: true,
    target: "_blank"
}
]


const App = () => {

    return(
        <div>
            <Router>
                <div className="App">
                <NavBar routes={routes} />
                <Container className='mt-0'>
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