import React from 'react';
import '../component_style/index.css';
import logo from '../images/coffee-shop.png';
// import RoutesFiles from './RoutesFile';
import {
    BrowserRouter,
    Link
} from "react-router-dom";



function Navigationmenu() {

    // ====================dynamic header code=========================
    // const menus = [
    //     { item: 'About Us', submenu: ['Action', 'Another action', 'Something else here'] },
    //     { item: 'Our PortFolio', submenu: ['Action', 'Another action', 'Something else here'] },
    //     { item: 'About Us', submenu: ['Action', 'Another action', 'Something else here'] },
    //     { item: 'Contact Us', submenu: ['Action', 'Another action', 'Something else here'] },
    //     { item: 'Sign In', submenu: ['Action', 'Another action', 'Something else here'] }
    // ]
    return (
        <>
            {/* ========================dynamic menus  */}
            {/* <nav class="sticky-top navbar navbar-expand-lg navbar-dark bg-dark navbar-sticky shadow">
                <a class="navsbar-brand" href="#">
                    <img src={logo} class="img-nv" />
                </a>
                <button class="navbar-toggler bg-warning" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>



                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto nav-font  text-dark">
                        {
                            menus.map((item, i) =>

                                <li class="nav-item dropdown" >
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {item.item}
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {
                                            item.submenu.map((s) => <a class="dropdown-item" href="#">{s}</a>

                                        )}
                                    </div>

                                </li>
                            )}



                    </ul>

                </div>
            </nav> */}
            {/* ===================================== */}
            {/* ====================Static header code========================= */}


            <nav class="sticky-top navbar navbar-expand-lg navbar-dark bg-dark navbar-sticky shadow">
                <a class="navbar-brand" href="#">
                    <img src={logo} class="img-nv" />
                </a>
                <button class="navbar-toggler bg-warning" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto nav-font  text-dark">
                        <li class="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li class="nav-item dropdown">
                            {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              About Us
                            </a> */}
                            <Link className="nav-link" to="/about_us"> About Us</Link>
                        </li>
                        <li class="nav-item dropdown">
                            {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                
                            </a>*/}
                        </li>
                        <li class="nav-item dropdown">
                            {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                            </a>*/}
                                 <Link className="nav-link" to="/who_we_are">Who we Are</Link>
                        </li>
                        
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navigationmenu
