import React, { useEffect, useState } from "react";
const Weatherapp= () => {
    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Mumbai");
    useEffect(() =>{
        const fetchApi =async () => {
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=607fde01a889cb27e2e108018074eea7`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        };
        fetchApi();

    },[search] )


    return(
        <div class="box"> 
        <div class="inputdata"> 
        <input type="search" class="input" onChange={(event) => {setSearch(event.target.value)}} />
        </div>
        {
            !city ? (
                <p class="para"> No data found</p>
            ) : (
                <div>
                     <div class="info">
        <h1 class="location">
            
            <i class="fas fa-street-view"></i>
            <br />
            {search}
            </h1>
            <h1 class="temp">
                {city.temp} Cel

            </h1>
            <h3 class="range">
                Min : {city.temp_min} | Max: {city.temp_max}
            </h3>


        </div>
        <div class="wave-one"> </div>
        <div class="wave-two"> </div>
        <div class="wave-three"> </div>
                </div>

            )
        }
        
        
       
       

        </div>

    )
}
export default Weatherapp;