import React from 'react'

function Sec_2_left_card(props) {
    return (
        <div class="row justify-content-center">
            <div class="col-lg-4 p-0 col-md-5">
                <img src={props.img} class="img-siz2 w-100 shadow-lg" />
            </div>
            <div class="col-lg-4 mt-4 col-md-5">
                <h1 class="h6 ml-lg-4">
                    {props.Title}
                </h1>
                <p class="small ml-lg-4 mr-lg-4 text-justify">
                    {props.Des}
                </p>
                <div class="row ml-lg-4 ml-0">
                    <p class="btn-g small p-2 text-center text-white font-weight-bold">
                        view more
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Sec_2_left_card
