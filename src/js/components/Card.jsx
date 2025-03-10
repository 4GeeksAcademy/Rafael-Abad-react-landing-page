import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import React from "react";

const Card = ({ cardTitle, imageSource, cardDescription }) => {
    return (
        <div>
            <h1>{cardTitle}</h1>
            <img className="card-img-top img-fluid" src={imageSource} ></img>
            <p>{cardDescription}</p>
            <div className="cardFooter">
                <button className="btn btn-primary">button label</button>
            </div>
        </div>
        
    );
};

export default Card;