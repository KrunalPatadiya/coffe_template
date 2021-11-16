import React from 'react'
import '../component_style/index.css'
import Footer from './Footer';
import Maincontent from './Maincontent';
import Navigationmenu from './Navigationmenu';
import Section_Card from './Section_Card';
import Slider from './Slider';

function Coffee_shop() {
    return (
        <>
            <Navigationmenu />
            <Slider />
            <Section_Card />
            {/* <Maincontent /> */}
            <Footer />

        </>
    )
}

export default Coffee_shop
