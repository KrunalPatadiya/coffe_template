//this file is for to display the given id data from api

import React, { useState, useEffect } from 'react'
import { getData } from '../components/Api_data'
import { useParams } from 'react-router-dom'


function Display_api_data() {

    const [data, setData] = useState([]);

    //we get the id from route
    const { id } = useParams()

    useEffect(() => {
        
        //pass id to getData function and get the response from api of given id record
        // r.data here data is contain object of our data from response
        getData(parseInt(id)).then((response) => {
            setData(response.data)
        }).catch((error) => {
            alert(error);
        });
    }, [])

    return (
        <div class="offset-4 col-lg-3 col-sm-12 p-0 col-md-4">
            <div class="card border-0 rounded-0 h-100 shadow-lg">
                <div class="card-title text-center p-0">
                    <b>{data.id}</b>
                </div>
                <div class="card-title text-center p-0">
                    <b>{data.title}</b>
                </div>
                <div class="card-body p-0 text-center small">
                    <p class="ml-5 mr-5"> {data.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Display_api_data
