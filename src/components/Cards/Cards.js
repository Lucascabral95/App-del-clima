import "./Cards.scss"
import { useContext } from "react"
import { WeatherContext } from "../../Context/WeatherContext.js"

const Cards = () => {

    const { precipitacion, temperaturaMinimaMaxima, temperatura} = useContext(WeatherContext)

    return (
        <div className="cards">


            <div className="contenedor-porcentRain">
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
            </div>




        </div>
    )
}

export default Cards