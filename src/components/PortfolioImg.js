import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import "../css/portfolioCol.css"

const PortfolioImg = ({
image, path, name, target
}) => {

    const { url } = useRouteMatch()

    return (
        <div  className="d-flex justify-content-center align-items-center mt-0 mb-5 mr-2">
                    <a href={path} target="_blank" className="align-items-center justify-content-center text-center p-0 m-0">
                        <div className="img mb-2" style={{backgroundImage:`url(${image})`}}></div>
                        <button className=" mr-auto pt-1 text-white border rounded-lg border-dark bg-dark">{name}</button>
                    </a>
        </div>
    )
}

export default PortfolioImg;
