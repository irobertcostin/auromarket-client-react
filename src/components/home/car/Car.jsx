import React, {useState} from "react";


function Car({car}){

    return(

        <tr>
            <td>
                <a href="">{car.maker}</a>
            </td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.price}</td>
            <td>{car.mileage}</td>
        </tr>

    )



}

export default Car;