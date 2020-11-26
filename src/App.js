import React from 'react';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition} from 'react-transition-group';
import { Container} from 'react-bootstrap';


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
                       <Switch>
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
                        </Switch>
                   ))}
                </Container>
                </div>
            </Router>  
        </div>
    )
}

export default App;