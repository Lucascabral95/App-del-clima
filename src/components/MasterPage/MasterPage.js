import { WeatherContext } from "../../Context/WeatherContext.js";
import React, { useContext } from "react"
import "./MasterPage.scss"
import { MdLocationOn } from 'react-icons/md';
import { BsWind } from "react-icons/bs"
import { WiHumidity } from "react-icons/wi"
import { BsFillCloudRainFill } from "react-icons/bs"

const MasterPage = () => {

    const { dia, temperatura, termica, ciudad, tiempo, humedad, viento, sky } = useContext(WeatherContext)

    return (
        <div className="masterPage">

            <div className="masterPage-contenedor">
                <span className="masterPage-dia"> {dia} </span>
                <span className="masterPage-temperatura"> {temperatura} </span>
                <span className="masterPage-termica"> {termica} </span>

                <div className="masterPage-location">
                    <MdLocationOn size={38} className="icon-location" />
                    <span className="masterPage-ciudad"> {ciudad} </span>
                </div>
            </div>


            {/* <div className="masterPage-datos">
                <div className="masterPage-datos-datos">
                    <BsWind color="#0A173B" size={30} className="icon-viento" />
                    <span>Viento</span>
                    <span> {viento} </span>
                </div>
                <div className="masterPage-datos-datos">
                    <WiHumidity color="#0A173B" size={30} className="icon-viento" />
                    <span>Humedad</span>
                    <span> {humedad} </span>
                </div>
                <div className="masterPage-datos-datos">
                    <TiWeatherSunny color="#0A173B" size={30} className="icon-viento" />
                    <span>Tiempo</span>
                    <span> {tiempo} </span>
                </div>
            </div> */}

            <div className="masterPage-newCard">
                <div className="masterPage-newCard-arriba">
                    {/* <img src="/sol-ui.png" alt="Icono del clima" /> */}
                    <img src="/luna-ui.png" alt="Icono del clima" />
                    <div className="masterPage-newCard-arriba-contenedor">
                        <span> {dia} </span>
                        <p> {sky} </p>
                        <span> {tiempo} </span>
                    </div>
                    <span className="temp-card"> {temperatura} </span>
                </div>

                <hr style={{ color: "white", paddingLeft: "100px", paddingRight: "10px" }} />

                <div className="masterPage-newCard-abajo">
                    <div className="masterPage-newCard-abajo-div">
                        <WiHumidity size={40} color="blue" className="icon-react" />
                        <span>Humedad</span>
                        <span> {humedad} </span>
                    </div>
                    <div className="masterPage-newCard-abajo-div">
                        <BsWind size={40} color="blue" className="icon-react" />
                        <span>Velocidad del viento</span>
                        <span> {viento} </span>
                    </div>
                    <div className="masterPage-newCard-abajo-div">
                         <BsFillCloudRainFill size={40} color="blue" className="icon-react" />
                        <span>Precipitación</span>
                        <span> 100% </span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MasterPage