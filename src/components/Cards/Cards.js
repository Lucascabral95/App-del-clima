import "./Cards.scss"
import { useContext } from "react"
import { WeatherContext } from "../../Context/WeatherContext.js"
import { FiWind } from "react-icons/fi"
import { BsFillCloudRainHeavyFill } from "react-icons/bs"
import { TbUvIndex } from "react-icons/tb"
import { WiBarometer } from "react-icons/wi"
import { MdOutlineMyLocation } from "react-icons/md"
import { FaRegSun } from "react-icons/fa"
import { WiHumidity } from "react-icons/wi"
import { AiFillCloud } from "react-icons/ai"

const Cards = () => {

    const { precipitacion, temperaturaMinimaMaxima, temperatura, presion, uv, viento,
        ubication, aparicionSol, humedad, nubes } = useContext(WeatherContext)

    return (
        <div className="cards">


            {/* <div className="contenedor-porcentRain">
                <div className="contenedor-datos-porcentRain">
                    <div className="datos-porcentRain">
                        <h3>Probabilidad de lluvia</h3>
                        <p>Probabilidad de lluvia actual</p>
                        <h5>{precipitacion}%</h5>
                    </div>
                </div>

                <div className="porcentRain">
                    <div className="porcentRain-interior" >
                        <div className="porcentRain-adentro" style={{ height: `${precipitacion}%` }}>
                            <p>{precipitacion}%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contenedor-minima-maxima">
                <h2>Temperatura </h2>
                <div className="minima-promedio-maxima">
                    <p> Minima {temperaturaMinimaMaxima[0]}°C </p>
                    <p> Promedio {temperatura} </p>
                    <p> Máxima {temperaturaMinimaMaxima[1]}°C </p>
                </div>
                <div className="minima-maxima-div">
                    <div className="progress-stacked" style={{ display: "flex", background: "black" }}>
                        <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} style={{ width: "33.5%", backgroundColor: "blue" }}></div>
                        <div className="progress" role="progressbar" aria-label="Segment two" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{ width: "33.5%", backgroundColor: "gray" }}></div>
                        <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} style={{ width: "33.5%", backgroundColor: "red" }}></div>
                    </div>
                </div>
            </div> */}

            <div className="contenedor-wind">
                <div className="icon-time-div">
                    <FiWind className="icon-time" />
                </div>
                <div className="wind-contenido">
                    <p>Velocidad del viento</p>
                    <h3>{viento[0]} Kms/h</h3>
                </div>
                <div className="wind-contenido">
                    <p>Dirección en °</p>
                    <h3>{viento[1]}°</h3>
                </div>
            </div>

            <div className="contenedor-rainChance">
                <div className="icon-time-div">
                    <BsFillCloudRainHeavyFill className="icon-time" />
                </div>
                <div className="rainChance-contenido">
                    <p>Probabilidad de lluvia</p>
                    <h3>  100% </h3>
                </div>
                <div className="rainChance-contenido">
                    <p>aaaa</p>
                    <h3>  100% </h3>
                </div>
            </div>

            <div className="contenedor-presion">
                <div className="icon-time-div">
                    <WiBarometer className="icon-time" />
                </div>
                <div className="presion-contenido">
                    <p>Presión del mar</p>
                    <h3> {presion[1]} hpa </h3>
                </div>
                <div className="presion-contenido">
                    <p>Presión del suelo</p>
                    <h3>{presion[2]} hpa</h3>
                </div>
            </div>

            <div className="coordenadas">
                <div className="icon-time-div">
                    <MdOutlineMyLocation className="icon-time" />
                </div>
                <div className="coordenadas-contenido">
                    <p>Latitud</p>
                    <h3> {ubication[1]} </h3>
                </div>
                <div className="coordenadas-contenido">
                    <p>Longitud</p>
                    <h3> {ubication[0]} </h3>
                </div>
            </div>

            <div className="puestaSalida-sol">
                <div className="icon-time-div">
                    <FaRegSun className="icon-time" />
                </div>
                <div className="puestaSalida-sol-contenido">
                    <p>Salida del sol</p>
                    <h3> {aparicionSol[0]} </h3>
                </div>
                <div className="puestaSalida-sol-contenido">
                    <p>Puesta del sol</p>
                    <h3> {aparicionSol[1]} </h3>
                </div>
            </div>

            <div className="humedad-visibilidad">
                <div className="icon-time-div">
                    <WiHumidity className="icon-time" />
                    <AiFillCloud className="icon-time" />
                </div>
                <div className="humedad-visibilidad-contenido">
                    <p>Humedad</p>
                    <h3> {humedad} </h3>
                </div>
                <div className="humedad-visibilidad-contenido">
                    <p>Nubes</p>
                    <h3> {nubes} </h3>
                </div>
            </div>


        </div>
    )
}

export default Cards