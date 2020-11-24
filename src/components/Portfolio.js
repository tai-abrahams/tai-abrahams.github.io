import React from 'react'
import PortfolioImg from './PortfolioImg'


import NCCImage from '../img/NCC-thumbnail.png'
import TravelLogIMG from '../img/travel-log-thumbnail.png'
import TheMMImage from '../img/TheMM-thumbnail.png';
//import ShoppingList from '../img/shoppingList'


const items = [
    {
        id:1,
        img: NCCImage,
        path: 'new-covenant-church' 
    }, {
        id:2,
        img: TravelLogIMG,
        path: 'travel-log'
    }, {
        id: 3,
        img: TheMMImage,
        path: 'themediamasons'
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
                items.map((item)=>(
                        <PortfolioImg image={item.img} path={item.path} key={item.id.toString()} />   
                ))
            }
        </div>
    )
}


export default Portfolio;
