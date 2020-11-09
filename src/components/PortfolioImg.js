import React from 'react'
import '../css/portfolioCol.css'
import NCC from '../img/NCC-thumbnail.png'
import { Link } from 'react-router-dom'

const PortfolioImg = ({
image, path
}) => {


    return (
        <div  className="portfolioCol__container">
            {console.log(image)}
            <Link to={`https://tai-abrahams.github.io/jail`} target={"_blank"} onClick={ e => { e.preventDefault(); window.open(this.makeHref(`https://tai-abrahams.github.io/jail`));}} > <div className="portfolioCol__img" style={{backgroundImage:`url(${image})`}}></div></Link>    
        </div>
    )
}

export default PortfolioImg;
