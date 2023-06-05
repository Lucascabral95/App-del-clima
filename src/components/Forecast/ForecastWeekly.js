import "./ForecastWeekly.scss"
import { useContext } from "react"
import { WeatherContext } from "../../Context/WeatherContext.js"

const ForecastWeekly = () => {

    const { temperatura } = useContext(WeatherContext)

    return (
        <div className="forecast-weekly">
            <h1> La temperatura actual es de: {temperatura}°C </h1>
        </div>
    )
}

export default ForecastWeekly