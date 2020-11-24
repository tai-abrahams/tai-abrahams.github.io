import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioImg = ({
image, path
}) => {


    return (
        <div  className="d-flex align-items-center mt-0 mb-5 mr-2 border border-warning">
            <Link to={path}> <div className="portfolioCol__img" style={{backgroundImage:`url(${image})`}}></div></Link>    
        </div> 
    )
}

export default PortfolioImg;
