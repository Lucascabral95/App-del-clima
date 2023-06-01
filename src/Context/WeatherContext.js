import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {

    const [temperatura, setTemperatura] = useState(null)
    const [ciudad, setCiudad] = useState(null)
    const [viento, setViento] = useState(null)
    const [humedad, setHumedad] = useState(null)
    const [tiempo, setTiempo] = useState(null)
    const [termica, setTermica] = useState(null)
    const [dia, setDia] = useState(null)
    const [sky, setSky] = useState(null)
    const [menuBurguer, setMenuBurguer] = useState(false)
    const [location, setLocation] = useState(null)
    const [forecastHourly, setForecastHourly] = useState([])

    //LLAMADA PARA DATOS DIARIOS
    const fechaActual = new Date();
    const opcionesFecha = { weekday: 'long', month: 'long', day: 'numeric', year: "numeric" };
    const nombreDia = `${fechaActual.toLocaleDateString('es-ES', opcionesFecha)}`;
    const fechaConDiaAbreviado = fechaActual.toLocaleDateString('es-ES', {
        ...opcionesFecha,
        weekday: 'short'
    }).replace(nombreDia, nombreDia);


    const traducciones = {
        Clear: 'Despejado',
        Clouds: 'Nublado',
        Rain: 'Lluvia',
        Drizzle: 'Llovizna',
        Thunderstorm: 'Tormenta eléctrica',
        Snow: 'Nieve',
        Mist: 'Niebla',
        Smoke: 'Humo',
        Haze: 'Neblina',
        Dust: 'Polvo',
        Fog: 'Niebla',
        Sand: 'Arena',
        Ash: 'Ceniza',
        Squall: 'Chubasco',
        Tornado: 'Tornado',
    };



    const apiKey = "0e1edd957a8fdb8c7003445277b69edc";
    const temp = async (ciudad) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&lang=es&units=metric`);
            const data = await response.data;
            const vientoKmh = parseInt(data.wind.speed) * 3.6
            setTemperatura(`${data.main.temp.toFixed(1)}°C`)
            setCiudad(data.name)
            setHumedad(`${data.main.humidity}%`)
            setViento(`${vientoKmh} kms/h`)
            setTiempo(`${data.weather[0].description}`)
            setTermica(`${data.main.feels_like}°`)
            setSky(traducciones[data.weather[0].main])
        } catch (error) {
            console.log("No se pudieron obtener los datos de la API", error);
        }
    };
    //LLAMADA PARA DATOS DIARIOS

    function iconDelClima(clima) {
        let icono;

        if (clima === "Clear") {
            // icono = "../../../public/img/sol-iu.png";
            icono = "https://cdn-icons-png.flaticon.com/128/2204/2204346.png";
        } else if (clima === "Clouds") {
            // icono = "/img/nublado-iu.png";
            icono = "https://cdn-icons-png.flaticon.com/128/2204/2204348.png";
        } else if (clima === "Rain") {
            // icono = "/img/lluvia-iu.png";
            icono = "https://cdn-icons-png.flaticon.com/128/2204/2204352.png";
        } else if (clima === "Drizzle") {
            // icono = "/img/lluviecita-iu.png";
            icono = "https://cdn-icons-png.flaticon.com/128/2204/2204351.png";
        } else if (clima === "Thunderstorm") {
            // icono = "/img/tormenta-electrica-iu.png";
            icono = "https://cdn-icons-png.flaticon.com/128/2204/2204354.png";
        } else if (clima === "Snow") {
            // icono = "/img/nieve-iu.png";
            icono = "https://cdn-icons-png.flaticon.com/128/2204/2204360.png";
        } else if (clima === "Mist" || clima === "Fog" || clima === "Haze") {
            // icono = "/img/niebla-iu.png";
            icono = "https://cdn-icons-png.flaticon.com/128/2910/2910067.png";
        } else if (clima === "Dust" || clima === "Sand") {
            // icono = "/img/arena-iu.png";
            icono = "https://cdn-icons-png.flaticon.com/128/874/874315.png";
        } else if (clima === "Smoke" || clima === "Ash") {
            // icono = "/img/niebla-iu.png";
            icono = "https://cdn-icons-png.flaticon.com/128/2910/2910067.png";
        } else if (clima === "Squall") {
            // icono = "/img/lluviecita-iu.png";
            icono = "https://cdn-icons-png.flaticon.com/128/2204/2204351.png";
        } else if (clima === "Tornado") {
            // icono = "/img/tornado-iu.png";
            icono = "https://cdn-icons-png.flaticon.com/128/2204/2204453.png";
        } else {
            // icono = "/img/incognita-iu.png";
            icono = "https://cdn-icons-png.flaticon.com/128/5493/5493014.png";
        }

        return icono;
    }

    // // LLAMADA PARA PRONOSTICOS POR HORA
    const pronosticoPorHora = async (ciudad2) => {
        try {
          const response2 = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad2}&appid=${apiKey}&lang=es&units=metric`);
          const data2 = await response2.data;
          if (data2 && data2.list && data2.list.length > 0) {
            const pronostico = data2.list.slice(0, 7).map((item) => {
              const fecha = new Date(item.dt_txt);
              const options = { weekday: 'long'};
              const fechaFormato = fecha.toLocaleString('es', options).replace(/^\w/, c => c.toUpperCase());
              const horaFormato = fecha.toLocaleString('en-US', { hour: 'numeric', hour12: true });
      
              const clima2 = iconDelClima(item.weather[0].main)
              const climaPosta = clima2
      
              return {
                climaSi: climaPosta,
                fecha: fechaFormato,
                hora: horaFormato,
                clima: item.weather[0].main,
                temperatura: item.main.temp,
                descripcion: item.weather[0].description,
              };
            });
            setForecastHourly(pronostico);
          } else {
            console.log("No se encontraron datos para la ciudad");
          }
        } catch (error) {
          console.log("Error al obtener el pronóstico por hora", error);
        }
      };
    // // LLAMADA PARA PRONOSTICOS POR HORA

    useEffect(() => {
        temp(location);
        setDia(fechaConDiaAbreviado)
        pronosticoPorHora(location);
    }, [location]);



    return (
        <WeatherContext.Provider value={{
            ciudad,
            setCiudad,
            temperatura,
            setTemperatura,
            viento,
            setViento,
            humedad,
            setHumedad,
            tiempo,
            setTiempo,
            termica,
            setTermica,
            dia,
            setDia,
            menuBurguer,
            setMenuBurguer,
            location,
            setLocation,
            forecastHourly,
            setForecastHourly,
            sky,
            setSky
        }}>
            {children}
        </WeatherContext.Provider>

    )
}

