//this file is for to display all the data from api

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

//import api function from Api data
import { addDataToApi, api } from './Api_data'


function Showall_api_data() {
    const [data, setData] = useState([]);

    //use state for get data from txtbox
    const [val1, setVal1] = useState("")
    const [val2, setVal2] = useState("")


    useEffect(() => {
        api().then((r) => { setData(r.data) })
            .catch((error) => {
                alert(error);
            });
    }, [])


    return (

        <>
            {/* =========================================== */}
            {/* Modal to fill title and body for add to api data  */}
            {/* =========================================== */}
            <div className="fixed-top col-md-12 text-center" >
                <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" >Add data</button>
            </div>

            {/* Modal  */}
            <div class="modal fade" id="exampleModalCenter" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Add Data</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="modal-body">
                            <input type="text" value={val1} onChange={e => setVal1(e.target.value)} className="form-control" placeholder="Add Title"></input>
                            <textarea type="text" value={val2} onChange={e => setVal2(e.target.value)} className="mt-3 form-control" placeholder="Add Body"></textarea>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                            {/* when user click on button val1 and val2 is passed to addDataToApifunction and get the response from that function then we concat our data to api  */}
                            <button type="button" class="btn btn-primary" data-dismiss="modal"
                                onClick={
                                    () => addDataToApi(val1, val2)
                                        .then((r) =>
                                            setData(data.concat(r.data)))
                                }>

                                Add Data
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            {/* =========================================== */}

            {/* =========================================== */}
            {/* here Display all the data come from api which is set into data useState  */}
            {/* =========================================== */}
            <table className="table table-bordered table-striped ">
                <tr>
                    <td colSpan="3">Display Data</td>
                </tr>
                {
                    data.map((item) =>
                        <tr>
                            <td>
                                {item.id}
                            </td>
                            <td>
                                {item.title}
                            </td>
                            <td>
                                <Link to={`/display_api_data/${item.id}`}>
                                    {item.body}
                                </Link>
                            </td>
                        </tr>
                    )
                }
            </table>
        </>
    )
}

export default Showall_api_data
