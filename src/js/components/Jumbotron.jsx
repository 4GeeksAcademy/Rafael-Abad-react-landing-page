import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import React from "react";
const Jumbotron = () => {
    return (
        <div className="jumbotron-fluid bg-light">
            <h1 className="display-4">Welcome to the jumbotron</h1>
            <p className="lead">Jumbotron from the Bootstrap library for my project</p>
            <button className="btn btn-lg btn-primary">Continue</button>
        </div>
    );
};

export default Jumbotron;