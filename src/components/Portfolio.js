import React from 'react'
import PortfolioImg from './PortfolioImg'
import '../css/Portfolio.css'
import  Images from "../img/images"
import NCCImage from '../img/NCC-thumbnail.png'
import CrownGroupImage from '../img/crowngroup-thumbnail.png'
import TheMMImage from '../img/TheMM-thumbnail.png';
// import CrownGroup from './CrownGroup/CrownGroup'
//import TheMM from './MediaMasons/TheMM'

const images = [
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
        //Component: TheMM
    }
]
const Portfolio = () => {
    return (
        <div className="portfolio__container">
            {
                images.map((image)=>(
                        <PortfolioImg image={image.img} path={image.path} key={image.id.toString()} />   
                ))
            }
        </div>
    )
}


export default Portfolio;
