// import Navbar from './components/Navbar/Navbar.js';
// import MasterPage from './components/MasterPage/MasterPage.js';
// import ForecastHourly from './components/Forecast/ForecastHourly.js';
import { WeatherProvider } from './Context/WeatherContext.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PageCentral from './components/PageCentral/PageCentral.js';

function App() {


  const horario = new Date()
  const horarioActual = horario.getHours()

  function colorRandom() {
    const colorAzar = Math.round(Math.random())
    return colorAzar === 0 ? "#41BDEC" : "black"
  }

  const color = colorRandom()


  return (
    
    <div style={{ backgroundColor: color }}>



      <WeatherProvider >


        <PageCentral />



      </WeatherProvider>

    </div>

  );
}

export default App;
