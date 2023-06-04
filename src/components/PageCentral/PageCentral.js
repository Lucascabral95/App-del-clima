import "./PageCentral.scss"
import { useContext } from "react"
import { WeatherContext } from "../../Context/WeatherContext.js"
import Navbar from "../Navbar/Navbar.js"
import Forecast from "../Forecast/ForecastHourly.js"
import MasterPage from "../MasterPage/MasterPage.js"

const PageCentral = () => {

    const { bottomSidebar } = useContext(WeatherContext)

    return (
        <div className="pageCentral" style={bottomSidebar ? { marginLeft: "140px", width: "calc(100% - 140px)" } : { marginLeft: "310px", width: "calc(100% - 310px)" }}>

          <Navbar />
          <MasterPage />
          <Forecast />

        </div>
    )
}

export default PageCentral