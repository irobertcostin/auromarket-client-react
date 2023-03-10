import React from "react";
import { Alert } from 'antd';




export default class Data {

    api(path, method = 'GET', body = null) {

        // a function with path attribute, method (get by default) and null body
        // null body because only reads


        const url = "http://localhost:4444" + path;

        const options = {

            // GET method by default
            method,

            // header 
            headers: {

                'Content-Type': 'application/json; charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }



        // body!= null means change of state, body must receive additional info

        if (body != null) {

            // receive the options and transform javascript in json

            options.body = JSON.stringify(body);

        }

        // will return the fetch
        return fetch(url, options)


    }




    async getCars() {
        let data = await this.api(`/all-cars`)
        return data.json();
    }

    async addNewCar(car){
        try {
            let response = await this.api('/new-car',"POST",car)
            
            if(response.status==201){
                console.log("ok")
            }else{
                console.log(response);
                console.log("failed")
            }
            
        } catch (error) {
            console.log(error)
        }
        


    }



}