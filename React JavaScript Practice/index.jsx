import React, { useState } from "react";

function myComponents () {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear);
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {

    }

    function handleRemoveCar(){

    }

    function handleYearChange(){

    }

    function handleMakeChange(){

    }

    function handleModelCar(){

    }

    return (<div>
        <h2>List of Car Objects</h2>
        <ul>


        </ul>
        
        <input type="number" value={carYear} onChange={handleYearChange} /> <br />
        <input type="text" value={carYear} onChange={handleMakeChange} /> <br />

        </div>);
}