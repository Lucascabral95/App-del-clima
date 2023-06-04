import { WeatherContext } from "../../Context/WeatherContext.js";
import React, { useContext } from "react"
import "./MasterPage.scss"
import { BsWind } from "react-icons/bs"
import { WiHumidity } from "react-icons/wi"
import { BsFillCloudRainFill } from "react-icons/bs"

const MasterPage = () => {

    const { dia, temperatura, tiempo, humedad, viento, sky, precipitacion, 
        estadoDelTiempo } = useContext(WeatherContext)

    return (
        <div className="masterPage">

            <div className="masterPage-newCard">
                <div className="masterPage-newCard-arriba">
                    <img src={estadoDelTiempo} alt="Icono del clima" />
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
                        <span> {precipitacion}% </span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MasterPage