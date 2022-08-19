import axios from 'axios'
import React, { useEffect } from 'react'
import './Checkapi.css'
export const Checkapi = () => {
    const getdata = async () => {
        console.log("start");
        const response = await axios.get('http://127.0.0.1:8000/list/?format=json');
        console.log(response);
        console.log("");
        console.log("start");
    }

    useEffect(() => {
        getdata();
    }, [])
    return (
        <>
            <div className="container">
                <h3>Hello this is the data from the api</h3>

            </div>


        </>
    )
}
