import { useState } from "react"
import axios from "axios"


function Weather() {

    const [city, setcity] = useState("")
    const [weather, setweather] = useState("")
    const [temp, settemp] = useState("")
    const [desc, setdesc] = useState("")


    function handlecity(event) {
        setcity(event.target.value)
    }
    function getweather() {



        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3551ab1a7d37bfa153746d5ad06e01be`)

        weatherdata.then(function (success) {
            console.log(success.data)
            setweather(success.data.weather[0].main)
            settemp(success.data.main.temp)
            setdesc(success.data.weather[0].description)

        })


    }

    return (
        <div className="bg-black p-20">
            <div className="bg-sky-300 p-10">
                <h1 className="text-2xl font-medium ">Weather Report</h1>
                <p>I can give you a weather report about your city!</p>
                <input onChange={handlecity} type="text" className="border border-black rounded-md outline-none p-1 mt-2" placeholder="Enter your City Name"></input>
                <br />
                <button onClick={getweather} className="bg-black text-white p-2 rounded-md mt-2">Get Report</button>
                <div className="mt-2">
                    <p><b>Weather: {weather}</b></p>
                    <p><b>Temperature: {temp}</b></p>
                    <p><b>Description: {desc}</b></p>
                </div>
            </div>
        </div>
    )
}
export default Weather