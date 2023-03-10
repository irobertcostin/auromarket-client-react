
import Data from "../../services/Api"
import React, { useEffect, useState } from "react";
import Car from "./car/Car";



function Home() {

    // folosim hook useState pentru a stoca informatia care va veni, deocamdata e nedefinit
    // cand se modifica cars, se modifica peste tot, si in front end 
    let [cars, setCars] = useState([]);


    // api care asteapta clasa , serviciul nostru de api 
    let api = new Data();



    // functie async care asteapta informatia
    let loadCars = async () => {


        // await api (serviciul nostru) , si getCars din api
        let data = await api.getCars();

        

        console.log(data.cars)
        // ne folosim de setCars din useState pentru a salva starea lui data
        setCars(data.cars);

    }



    useEffect(() => {

        // useEffect se apeleaza cand se incarca componenta pe pagina 
        // prima data cand se incarca componenta, si dupa doar schimbarle detectate
        loadCars();


    },[])


    

    return (

        <>
            <h1>Cars</h1>
            <p><a className="button" href="new_book.html">Create New Car</a></p>
            <table>
                <thead>
                    <tr>
                        <th>Maker</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Price</th>
                        <th>Mileage</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cars.length>0 &&
                        cars.map(element => {
                            // car trebuie sa aiba acelasi nume ca PROPS din functia Car din componenta Car 
                            return <Car car={element}  key={element.id}/>
                        })
                    }
                </tbody>
            </table>
        </>

    )
}


export default Home;