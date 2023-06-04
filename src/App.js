import { WeatherProvider } from './Context/WeatherContext.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar/Navbar.js';
import MasterPage from './components/MasterPage/MasterPage.js';
import ForecastHourly from './components/Forecast/ForecastHourly.js';

function App() {

  
  const horario = new Date()
  const horarioActual = horario.getHours()
  
  return (
    <div style={horarioActual > 6 && horarioActual <= 19 ? { background: "#E2C6F6" } : { background: "white" }}>

      <WeatherProvider >


          <Navbar />
          <ForecastHourly />
        {/* <MasterPage /> */}




      </WeatherProvider>
    </div>
  );
}

export default App;
