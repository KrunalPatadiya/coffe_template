//this file display the three cards when user click on card then that card data display in Display_card page

import React from 'react'
import '../component_style/index.css'

//use for routing
import { Link } from "react-router-dom";

//here data contain all the array data in which we get data using map
import { data } from './Carddata';


function Section_Card() {

    // const data = [
    //     { id:'s1', img: cup, Title: 'Tasty Coffee', Des: 'Most of all, we are committed to giving you the best customer service as well as a comfortable environment to sit with good friends, research study and work.' },
    //     { id:'s2',img: clock, Title: 'Fast Cooking', Des: 'Our preferred, straightforward and also unique method of developing cool coffee.' },
    //     { id:'s3', img: location, Title: 'Free Delivery', Des: 'We are the Cafe with a bold vision to make a distinction in both our neighborhood and also worldwide neighborhoods.' }
    // ]

    return (
        <div class="row">
            <div class="col-12 bg-light">
                <div class="row justify-content-center mt-n5 ">
                    {
                        data.map((item) =>
                            <div class="col-lg-3 col-sm-12 p-0 col-md-4">
                                {/* pass the id of card using route  */}
                                <Link to={`/display_data/${item.id}`}>
                                    <div class="card border-0 rounded-0 h-100 shadow-lg">
                                        <div class="card-header text-center p-0 border-0 bg-white">
                                            <img src={item.img} class="rotet-3d3" />
                                        </div>
                                        <div class="card-title text-center p-0">
                                            {item.Title}
                                        </div>
                                        <div class="card-body p-0 text-center small">
                                            <p class="ml-5 mr-5"> {item.Des}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )//return over
}//function over

export default Section_Card
