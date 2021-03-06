import React from 'react'
import PortfolioImg from './PortfolioImg'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import NCCImage from '../img/NCC-thumbnail.png'
import TravelLogIMG from '../img/travel-log-thumbnail.png'
import TheMMImage from '../img/TheMM-thumbnail.png';
//import ShoppingList from '../img/shoppingList'


const routes = [
    {
        id:1,
        img: NCCImage,
        path: 'new-covenant-church',
        name: 'new covenant church',
        target: "_blank"  
    }, {
        id:2,
        img: TravelLogIMG,
        path: 'travel-log',
        name: 'travel log',
        target: "_blank"  
    }, {
        id: 3,
        img: TheMMImage,
        path: 'themediamasons',
        name: 'the media masons',
        target: "_blank"  
    } /*{
        id: 4,
        img: ShoppingList,
        path: 'shopping-list'
    },
    {
        id: 5,
        img: socialsIMG,
        path: ''
    }*/ 
]
const Portfolio = () => {
    return (
        <div className="d-flex flex-column flex-sm-row flex-wrap justify-content-center">
            
                {
                    routes.map(({id, img, path, name, target})=>(
                            <PortfolioImg image={img} path={path} name={name} target={target} key={id.toString()} />
                           
                    ))
                }

        </div>
    )
}


export default Portfolio;
