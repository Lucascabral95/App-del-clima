import "./ForecastHourly.scss"
import { useContext } from "react";
import { WeatherContext } from "../../Context/WeatherContext.js";

const Forecast = () => {
    const { forecastHourly, location } = useContext(WeatherContext);


    return (
        <div className="contenedor-forecast" >

            <div className="contenedor-porHora" >

                {forecastHourly.map((item, index) => (
                    <div className="contenedor-contenedor" key={index}>

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