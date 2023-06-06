import "./PageCentral.scss"
import { useContext } from "react"
import { WeatherContext } from "../../Context/WeatherContext.js"
import Navbar from "../Navbar/Navbar.js"
import Forecast from "../Forecast/ForecastHourly.js"
import MasterPage from "../MasterPage/MasterPage.js"
import ForecastWeekly from "../Forecast/ForecastWeekly.js"
import Cards from "../Cards/Cards.js"
import ProbabilidadLluvia from "../ProbabilidadLluvia/ProbabilidadLluvia.js"


const PageCentral = () => {

  const { bottomSidebar } = useContext(WeatherContext)

  return (
    <div className="pageCentral" style={bottomSidebar ? { marginLeft: "140px", width: "calc(100% - 140px)" } : { marginLeft: "310px", width: "calc(100% - 310px)" }}>

      <Navbar />

      {/* <div className="ordenador-pageCentral" > */}
      <div className="interior">
        <div className="interior-divv">
          <div>
          <MasterPage />
          <ProbabilidadLluvia />
          </div>
          <Cards />
        </div>
      </div>
      {/* <ForecastWeekly /> */}
      <Forecast />
      {/* </div> */}

    </div>
  )
}

export default PageCentral