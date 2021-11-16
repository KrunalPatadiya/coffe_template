import React from 'react'
import '../component_style/index.css';

import rb2 from '../images/read-blog/rb-2.jpeg';
import rb3 from '../images/read-blog/rb-3.jpeg';
import rb1 from '../images/read-blog/rb-1.png';


function Section_6() {

    const data = [
        {
            label: 'Customer story',
            img: rb1,
            Title: 'Excellent Coffee',
            Des: 'The coffee at eCommerce Website Template for cafe is quite a deliciousness'
        },
        {
            label: 'Outlook',
            img: rb2,
            Title: 'Nice Staff',
            Des: 'Featured delecacies cooked and served to excite you paired with a cup of coffee'
        },
        {
            label: 'Kitchen stories',
            img: rb3,
            Title: 'Tasty delecacies',
            Des: 'Featured delecacies cooked and served to excite you paired with a cup of coffee'
        }
    ]

    return (
        <div class="container ">
            <div class="row mt-3">
                <div class="col-lg-12 text-center h4">
                    3. Read our blog to understand our philosophy
                </div>

            </div>
            <div class="row justify-content-center ">
                {
                    data.map((item) =>

                        <div class="col-lg-3 mt-3 col-md-4">
                            <div class="card p-0 border-0">
                                <img src={item.img} class="card-img-top" alt="" />
                                <div class="card-img-overlay p-0 mt-3 ">
                                    <h5 class="card-title text-white small bg-danger w-25 ml-3 label-g p-1 d-inline shadow-lg">
                                        {item.label}
                                    </h5>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title h4 text-center">
                                        {item.Title}
                                    </h5>

                                    <p class="card-text small text-center text-muted">
                                        {item.Des}
                                    </p>
                                    <div class="row justify-content-center">
                                        <p class="btn-g small p-2 text-center text-white font-weight-bold">
                                            Read More
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Section_6
