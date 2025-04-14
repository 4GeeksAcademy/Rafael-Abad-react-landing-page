import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import React from "react";
import "/workspaces/Rafael-Abad-react-landing-page/src/styles/index.css";

const Card = ({ cardTitle, imageSource, cardDescription }) => {
    return (
        <div className="card h-100 shadow-sm">
            <img
                src={imageSource}
                className="card-img-top uniform-img"
                alt={cardTitle}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text flex-grow-1">{cardDescription}</p>
                <div className="mt-auto">
                    <button className="btn btn-primary">button label</button>
                </div>
            </div>
        </div>
    );
};

export default Card;