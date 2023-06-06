import { useContext } from "react"
import { WeatherContext } from "../../Context/WeatherContext.js"
import "./ProbabilidadLluvia.scss"

const ProbabilidadLluvia = () => {
  const { forecastHourly  } = useContext(WeatherContext)

  const seis = forecastHourly.slice(0, 6)

  return (
    <>
      <div className="probabilidad-lluvia">
          <h2 className="titulo-probabilidad-lluvia">Probabilidad de lluvia</h2>
        <div className="probabilidad-interior" >


          <div className="descripcion-probabilidad">
            <p className="indicador-probabilidad">Rainy</p>
            <p className="indicador-probabilidad" style={{ marginTop: "6px" }}>Sunny</p>
            <p className="indicador-probabilidad" style={{ marginTop: "6px" }}>Heavy</p>
          </div>

          {seis.map((item, index) => (
            <div className="probabilidad-interior-carga" key={index}>
              <div className="barra-probabilidad" >
                <div className="barra-probabilidad-interior" style={{ height: `${item.probabilidadLluvia}%` }} >
                </div>
              </div>
              <p>{item.hora}</p>
            </div>
          ))}

        </div>


      </div>
    </>
  )
}

export default ProbabilidadLluvia