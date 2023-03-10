import React, { useState } from "react";
import Data from "../../services/Api";
import { Alert, Button } from 'antd';


function NewCar() {


    const [maker, setMaker] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    const [mileage, setMileage] = useState('');


    const [errors, setErrors] = useState([]);

    
    // double binding changeState 
    // change handler will observe changes in the form and set values, if the elements from the handler contain those classes
    // observer mapping 

    let changeMaker = (element) => {
        element.preventDefault();

        let obj = element.target;
        console.log(obj.value)

        setMaker(obj.value);



    }


    let changeModel = (element) => {
        element.preventDefault();

        let obj = element.target;
        setModel(obj.value)
    }


    let changeYear = (element) => {
        element.preventDefault();

        let obj = element.target;
        setYear(obj.value)

    }


    let changePrice = (element) => {
        element.preventDefault();

        let obj = element.target;
        setPrice(obj.value)


    }

    let changeMileage = (element) => {
        element.preventDefault();

        let obj = element.target;
        setMileage(obj.value)
    }


    let checkErrors = () => {


        let errors = [];

        if (maker === "") {
            errors.push(`No maker found`)
        }

        if (model == "") {
            errors.push('No model found')
        }

        if (year == "") {
            errors.push('No year found')
        }

        if (price == "") {

            errors.push('No price found')
        }

        if (mileage == "") {
            errors.push('No mileage found')
        }




        setErrors(errors);
        
    }




    let addCar = async () => {

        checkErrors();
        if(errors.length==0){
        let car = {
            maker: maker,
            model: model,
            year: year,
            price: price,
            mileage: mileage
        }

        
        let api = new Data();
        await api.addNewCar(car)
        
        }   
    }




    return (
        <>


            <div>

                {
                    // props err este maparea fiecarui element din errors
                    errors.length > 0 && errors.map(err => <Alert message={err} type="error"  closable showIcon/>)
                }

            
            </div>

            <form >

                <div>
                    <label>Maker</label>
                    <input onChange={changeMaker} value={maker} className="maker"></input>
                </div>
                <div>
                    <label>Model</label>
                    <input onChange={changeModel} value={model} className="model"></input>
                </div>
                <div>
                    <label>Year</label>
                    <input onChange={changeYear} type={"number"} value={year} className="year"></input>
                </div>
                <div>
                    <label>Price</label>
                    <input onChange={changePrice} type={"number"} value={price} className="price"></input>
                </div>
                <div>
                    <label>Mileage</label>
                    <input onChange={changeMileage} type={"number"} value={mileage} className="mileage"></input>
                </div>

            </form>


                <div>
                    {
                        errors.length<1 && <Alert message="Car successfully added" type="success" showIcon closable />
                        
                    }
                </div>



            <Button type="primary" onClick={checkErrors}>Add new car</Button>


        </>



    )





}


export default NewCar;