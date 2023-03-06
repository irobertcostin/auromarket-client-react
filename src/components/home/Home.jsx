
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


        // await api (serviciul nostru) , si getCars thin api
        let data = await api.getCars();

        

        console.log(data.cars)
        // ne folosim de setCars din useState pentru a salva starea lui data
        setCars(data.cars);

    }



    useEffect(() => {

        // 
        loadCars();




    }, [])


    

    return (

        <>
            <h1>Books</h1>
            <p><a className="button" href="new_book.html">Create New Book</a></p>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Year</th>
                    </tr>
                </thead>

                <tbody>
                    {cars.length>0 &&
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