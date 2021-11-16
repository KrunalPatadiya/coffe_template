import React from 'react'   
import Footer_Address from './Footer_Address'
import Footer_Time from './Footer_Time'
import Footer_Contact from './Footer_Contact'
import Navigationmenu from './Navigationmenu'

function Footer() {
    return (
        <>
        {/* <Navigationmenu /> */}
            <p class="small text-center mt-4">
                Welcome to our Coffeehouse
            </p>
            <p class="h3 text-center p-0 mt-2">
                Do you like it? Share this page!
            </p>
            <div class="row justify-content-center p-0">
                <div class="mr-3">
                    <i class="fab fa-facebook"></i>
                </div>
                <div class=" mr-3">
                    <i class="fab fa-pinterest"></i>
                </div>
                <div class="mr-3">
                    <i class="fab fa-twitter"></i>
                </div>
                <div class=" mr-3">
                    <i class="fab fa-google-plus-g"></i>
                </div>
                <div class=" mr-3">
                    <i class="fab fa-instagram"></i>
                </div>
                <div class="mr-3">
                    <i class="fab fa-odnoklassniki"></i>
                </div>
                <div class=" mr-3">
                    <i class="fab fa-wikipedia-w"></i>
                </div>
            </div>


            <div class="container my-5">
                <div class="row justify-content-center">

                    <Footer_Address />
                    <Footer_Time />
                    <Footer_Contact />

                </div>
            </div>
        </>
    )
}

export default Footer
