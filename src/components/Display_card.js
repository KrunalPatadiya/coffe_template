//this file used to display the card of given id
import React from 'react'
import Navigationmenu from './Navigationmenu'
import Footer from './Footer'
//import useParams hook 
import { useParams } from 'react-router-dom'
//import getData function from Carddata component 
import { getData } from './Carddata'

function Display_card() {

    //get the id from route 
    const { id } = useParams()

    //here we get the particullar data from getData function by passing the id to function getData 
    let dataD = getData(parseInt(id))
    return (
        <>
            <Navigationmenu />
            <h2 >Display Card</h2>
            <div class="offset-4 col-lg-4 col-sm-12 p-0 col-md-4">
                <div class="card border-0 rounded-0 h-100 shadow-lg">
                    <div class="card-header text-center p-0 border-0 bg-white">
                        <img src={dataD.img} class="rotet-3d3" />
                    </div>
                    <div class="card-title text-center p-0">
                        {dataD.Title}
                    </div>
                    <div class="card-body p-0 text-center small">
                        <p class="ml-5 mr-5"> {dataD.Des}</p>
                    </div>
                </div>  
            
            </div>
            <Footer />
        </>
    )
}

export default Display_card
