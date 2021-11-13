import React from 'react'
import '../component_style/index.css';


import bse2 from '../images/bse2.jpg';
import bse from '../images/bse.jpg';
import Sec_2_left_card from './Sec_2_left_card';
import Sec_2_right_card from './Sec_2_right_card';
import Navigationmenu from './Navigationmenu';
import Footer from './Footer';

function Section_2() {

    const data = [
        { img: bse2, Title: 'Home atmosphere', Des: "As a missional Cafe focused on lasting options to poverty, we turn profits into hope. We do this by creating a product you love, serving you with a smile, as well as offering all of our profits to individuals in need." },
        { img: bse, Title: 'Fast Cooking', Des: "Our preferred, straightforward and also unique method of developing cool coffee at our cafe. The flash-chill procedure enables us to harness each coffee's natural attributes with a hot-water brew, and afterwards lock them in place with an instant decrease in temperature level." },
    ]

    return (
        <>
            <Navigationmenu />
            <div class="row mt-3">
                <div class="col-lg-12">
                    <h2 class="h5 text-center mb-5 mt-4">You will enjoy our cafe if you love...</h2>
                    {
                        data.map((item, i) =>

                            i % 2 == 0 ?
                                <Sec_2_left_card img={item.img} Title={item.Title} Des={item.Des} />
                                :
                                <Sec_2_right_card img={item.img} Title={item.Title} Des={item.Des} />


                        )}

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Section_2
