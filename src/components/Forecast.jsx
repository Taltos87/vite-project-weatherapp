import React from "react";
import { useState } from "react";
import { Button } from "bootstrap";
import "../styles/Forecast.css";

const Forecast = ({ city, handleInputChange, handleSubmit }) => {
    return (
        <div className="forecast"> 
            <div className="row">   
                <div className="col-sm-2">
                    <div className="card-forecast"> <h2>Forecast</h2>
                        <div className="card-body-forecast">

                        </div>
                    </div>
                </div>
             </div>
        </div>  
    );
};


export default Forecast;