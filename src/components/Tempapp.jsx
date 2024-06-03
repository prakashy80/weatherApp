import React, { useEffect, useState } from "react";
import "./css/style.css";
// import axios from "axios";
const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("ranchi");
    useEffect(() => {
        // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c4532c468d205ad81361741197ea2b86`)
        // .then((ele)=>{
        //     console.log(ele);
        //     setCity(ele.data.main);
        // });
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c4532c468d205ad81361741197ea2b86`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
            console.log(resJson);
        }
        fetchApi();
    }, [search]);
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        onChange={(event) => {
                            setSearch(event.target.value);
                        }}
                    />
                </div>
                {!city ? (
                    <p className="errorMsg">No Data Found</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">{city.temp}°Cel</h1>
                            <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>
                )}
            </div>
        </>
    );
}
export default Tempapp;