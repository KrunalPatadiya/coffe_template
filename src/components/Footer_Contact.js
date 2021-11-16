import React from 'react'

function Footer_Contact() {
    return (
        <div class="col-lg-4  text-center col-md-4 mt-3">
            <label class="text-uppercase">
                Get in Touch
            </label>
            <div class="iB">
                <input type="text" placeholder="Name" />
            </div>
            <div class="mt-3 iB">
                <input type="tel" placeholder="Phone" />
            </div>
            <div class="mt-3 iB">
                <textarea placeholder="Message"></textarea>
            </div>
            <div class="mt-3 ">
                <button class="btn-g p-1 border-0 text-white">Send</button>
            </div>
        </div>
    )
}

export default Footer_Contact
