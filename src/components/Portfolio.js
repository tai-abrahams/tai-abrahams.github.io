import React from 'react'
import PortfolioImg from './PortfolioImg'
import '../css/Portfolio.css'
import  Images from "../img/images"
import NCCImage from '../img/NCC-thumbnail.png'
import CrownGroupImage from '../img/crowngroup-thumbnail.png'
import TheMMImage from '../img/TheMM-thumbnail.png';
// import CrownGroup from './CrownGroup/CrownGroup'
//import TheMM from './MediaMasons/TheMM'

const items = [
    {
        id:1,
        img: NCCImage,
        path: 'new-covenant-church' 
    }, {
        id:2,
        img: CrownGroupImage,
        //Component: CrownGroup
        
    }, {
        id: 3,
        img: TheMMImage,
        path: 'the-media-masons'
        //Component: TheMM
    }
]
const Portfolio = () => {
    return (
        <div className="portfolio__container">
            {
                items.map((item)=>(
                        <PortfolioImg image={item.img} path={item.path} key={item.id.toString()} />   
                ))
            }
        </div>
    )
}


export default Portfolio;
