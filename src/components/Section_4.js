import React from 'react'
import '../component_style/index.css';


import c1 from '../images/about-me/c1.jpeg';
import c2 from '../images/about-me/c3.jpeg';
import c3 from '../images/about-me/c2.jpeg';

function Section_4() {

    const data = [
        { img: c1, Title: 'John Smith', subTtile: 'Musician', Des: "He creates the best mood in the eCommerce Website Template Cafe and makes you happy." },
        { img: c2, Title: 'Amanda Adams', subTtile: 'Barista', Des: "The coolest coffee maker you've ever found. She knows how to wow her clients with a cup of fresh coffee." },
        { img: c3, Title: 'Ashley Cage', subTtile: 'Purchasing Officer', Des: "She knows exactly what you want and will offer the coffee for your taste." }
    ]

    return (
        <div class="container mt-4">

            <div class="row mt-3">
                <div class="col-lg-12 text-center h4">
                    1. Meet Our Team
                </div>
                <div class="col-lg-12 small text-muted text-center">
                    We make the world's best coffee
                </div>
         

                    <div class="row justify-content-center ">
            {
                data.map((item) =>
                        <div class="col-lg-3 mt-3 col-md-4">
                            <div class="card p-0 border-0">
                                <img src={item.img} class="card-img-top shadow-lg b-u" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title h6">
                                        {item.Title}
                                    </h5>
                                    <h6 class="card-subtitle small text-muted mb-1">
                                        {item.subTtile}
                                    </h6>
                                    <p class="card-text small">
                                        {item.Des}
                                    </p>

                                </div>
                            </div>
                        </div>

                )}
                    </div>
                
        </div>
        </div>
    )
}

export default Section_4
