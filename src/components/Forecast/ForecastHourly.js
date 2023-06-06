import "./ForecastHourly.scss"
import { useContext } from "react";
import { WeatherContext } from "../../Context/WeatherContext.js";
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { BsArrowLeftCircleFill } from "react-icons/bs"

const Forecast = () => {
    const { forecastHourly, location, traslacionX, setTraslacionX } = useContext(WeatherContext);

    const handleNext = () => {
        const maxTranslateX = -102 * (forecastHourly.length - 1); // Máximo desplazamiento permitido

        if (traslacionX > maxTranslateX) {
            setTraslacionX(prevTraslacionX => prevTraslacionX - 102);
        }
    };

    const handlePrev = () => {
        const maxTranslateX = 0; // Máximo desplazamiento permitido hacia atrás

        if (traslacionX < maxTranslateX) {
            setTraslacionX(prevTraslacionX => prevTraslacionX + 102);
        }
    };

    return (
        <div className="contenedor-forecast" >

            <BsArrowLeftCircleFill size={40} color="black" onClick={handlePrev} className="boton-prev" />
            <BsFillArrowRightCircleFill size={40} color="black" onClick={handleNext} className="boton-next" />

            <div className="contenedor-porHora" >
                {forecastHourly.map((item, index) => (
                    <div className="contenedor-contenedor" key={index}
                        style={{ transform: `translateX(${traslacionX}px)` }} >

                        <div className="contenedor-card-forecast">
                            <div className="div-card-hora">
                                <p className="card-hora">{item.hora}</p>
                            </div>
                            <div className="div-card-dia">
                                <p className="card-dia">{item.fecha}</p>
                            </div>
                            <div className="div-card-imagen">
                                <img src={item.climaSi} alt="Icono del clima" />
                            </div>
                            <div className="div-card-temperatura">
                                <p className="card-temperatura">{item.temperatura}ºC</p>
                            </div>
                            <div className="div-card-location">
                                <p className="card-location">{location}</p>
                                <p className="card-location">{item.probabilidadLluvia}%</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default Forecast;