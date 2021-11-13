import React from 'react'
import img from '../images/back1.jpeg';
import Navigationmenu from './Navigationmenu';
function Slider() {
    // <Navigationmenu />
    return (
        <div class="row">
            <div class="col-12 p-0">
                <img src={img} class="w-100 img-siz" alt="image for this content" />
                <div class="card-img-overlay p-0 mt-5 ">

                    <p class="small text-white text-center p-0 m-0">
                        want to have a good time and to drink some coffee?
                    </p>
                    <p class="h1 text-center text-white p-0 m-0">
                        come to our cafe
                    </p>
                    <p class="text-white text-center small mr-md-5 ml-md-5">
                        Our Cafe was created by the owners of Mobirise eCommerce Website Builder to bring endeavor ready
                        clients,locals, and travelers a truly unique coffee experience
                    </p>
                    <p class="text-center text-white btn-g m-auto p-1">
                        Read More
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Slider
