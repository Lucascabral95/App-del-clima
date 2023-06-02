import "./ForecastHourly.scss"
import { useContext, useState } from "react";
import { WeatherContext } from "../../Context/WeatherContext.js";

const Forecast = () => {
    const { forecastHourly, location, precipitacion } = useContext(WeatherContext);


    return (
        <div className="contenedor-forecast">

            {/* <div className="forecast-today-weekly">
                <div className="forecast-today">
                    <p>Today</p>
                </div>

                <div className="forecast-weekly">
                    <p>Weekly</p>
                </div>
            </div> */}

            <div className="contenedor-porHora">
                {forecastHourly.map((item, index) => (
                    <div className="contenedor-contenedor" key={index}>

                        {/* <div className="contenedor-forecast-porHora">
                            <span className="dia">{item.fecha}</span>
                            <span className="hora">{item.hora}</span>
                            </div>
                            
                            <div className="contenedor-forecast-temperatura">
                            <p>{item.temperatura}°C</p>
                            </div>
                            
                            <div className="contenedor-forecast-icon">
                            <img src={item.climaSi} alt="Icono del clima" />
                        </div> */}
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

            <div className="porcentRain">

                <div className="porcentRain-interior" >
                    <div className="porcentRain-adentro" style={{ height: `${precipitacion}%` }}>


                    </div>
                </div>

            </div>



        </div>
    );
};

export default Forecast;