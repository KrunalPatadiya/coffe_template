import React from 'react'
import cafe_photo from '../images//fI.jpeg'

function Footer_Address() {
    return (
        <div class="col-lg-4 col-md-4">
            <div class="text-center">
                <img src={cafe_photo} class="foi" />
            </div>

            <ul class="mt-2">
                <li>
                    <i class="fas fa-map-marker-alt mr-1 icon-color"></i>
                    <label class="small font-weight-bold">
                        1234 Street Name city, AA 9999
                    </label>
                </li>
                <li>
                    <i class="fas fa-envelope mr-1 icon-color mr-md-1"></i>
                    <label class="small font-weight-bold">
                        support@mobirise.com
                    </label>
                </li>
                <li> <i class="fas fa-phone-square-alt mr-2 icon-color"></i>
                    <label class="small font-weight-bold">
                        +1(0)000 0000 001
                    </label>
                </li>
                <li> <i class="fas fa-fax mr-2 icon-color"></i>
                    <label class="small font-weight-bold">+1(0)000 0000 002</label>
                </li>
            </ul>
        </div>
    )
}

export default Footer_Address
