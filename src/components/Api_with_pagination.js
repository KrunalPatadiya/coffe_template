//task is to call api using given paramater to it then display response that data all 
//and when click on see more button pass new offset value to api  which you get when call api for first time
// then get the response with all api records  

import React, { useState, useEffect } from 'react'
import { api_with_pagination } from './Api_data'
import '../component_style/index.css';


const Api_with_pagination =() => {

    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [ nextValue, setNextValue] = useState(true);

    //when page load display the record available at offset 0 
    //it will call when page is load only
    useEffect(() => {
        performTask();
    }, [])

    //here we set the data come from api in use setData use state
    //then print in return method using map on data state
    const performTask = () => {
        api_with_pagination(offset).then((r) => {
            //get thhe 
            setData(data.concat(r.data.data))

            //supoose when first time we get the data that time if we return next value false so 
            //we dont display see more button by setting the value to setNextValue
            setNextValue(r.data.meta.next);
            
            //set the offset value which is available in response of api
            setOffset(r.data.meta.offset)
        })
        .catch((error) => {
            alert(error);
        });
    }


    return (
        <>
            <div className="row">
                {
                    data.map((item) =>
                        <div class=" col-lg-4 p-0 col-md-4">
                            <div class="card border rounded-0 h-100 shadow-lg ">
                                <div class="card-header text-center p-0 border-0 bg-white">
                                    <img src={item.image} height="200px" />
                                </div>
                                <div class="card-title text-center p-0">
                                    <b>{item.id}</b>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            {/* hide buttton when the value of next is false */}
          { 
              nextValue &&
                <button onClick={() => performTask()} className="btn btn-primary">See More</button>
          }
        </>
    )
}

export default Api_with_pagination


