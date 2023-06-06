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

  return (
    
    <div style={{ backgroundColor: "#41BDEC"}}>



      <WeatherProvider >


        <PageCentral />



      </WeatherProvider>

    </div>

  );
}

export default App;
