//in index.js file call this file like <RoutesFiles /> and remove <App /> because redirection done here 

import React from "react";
import error_page from '../images/404_page.svg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Section_2 from "./Section_2";
import About_us from "./About_us";
import Display_card from "./Display_card";
import Display_api_data from "./Display_api_data";
import Showall_api_data from "./Showall_api_data";
import Login from "./Login";
import Welcome from "./Welcome";  
import  Api_with_pagination from "./Api_with_pagination";
import Formdataex from "./Formdataex";
import Formwithformdata from "./Formwithformdata";
import Antdesigncomponent from "./Antdesigncomponent";

function RoutesFiles() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* if user pass any url that doesnt match with our route it will display this heading */}
          {/* for ex user pass "localhost:3000/display_da" this url it will display that heading because 
              there is no route like that */}
          <Route exact path="*" element={<img src={error_page} className="w-50  text-center"/>} />

          {/* path contain the route name where element contain component name  */}
          {/* <Route exact path="/" element={<Coffee_shop />} /> */}
          <Route exact path="/about_us" element={<About_us />} />
          <Route exact path="/who_we_are" element={<Section_2 />} />

          {/* display_data is a route name WHICH IS SAME AS IN LINK  */}
          <Route exact path="/display_data/:id" element={<Display_card />} />

          {/* route to display login page */}
       
          {/* =========Login and welcome pagr routes===================== */}
          {/* <Route exact path="/" element={<Login />} /> */}

          {/* route to display Welcome page */}
          <Route exact path="/welcome" element={<Welcome />} />
          {/* ============================== */}
          {/* uncomment to display all api data */}
          {/* <Route exact path="/" element={<Showall_api_data />} /> */}
          <Route exact path="/display_api_data/:id" element={<Display_api_data />} />


          {/* =========Login and welcome pagr routes===================== */}
          {/* <Route exact path="/" element={<Api_with_pagination />} /> */}


          {/* pass email and password to api for login check using Form data  */}
           {/* <Route exact path="/" element={<Formdataex  />} /> */}

          
           <Route exact path="/" element={<Formwithformdata  />} />

              {/* file for ant design excercises */}
           {/* <Route exact path="/" element={<Antdesigncomponent  />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default RoutesFiles