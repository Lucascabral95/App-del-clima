import { WeatherProvider } from './Context/WeatherContext.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar/Navbar.js';
// import MasterPage from './components/MasterPage/MasterPage.js';
import ForecastHourly from './components/Forecast/ForecastHourly.js';


function App() {
  return (
    // <div style={{ background: "#1A1B1E" }}>
    <div style={{ background: "white" }}>
      <WeatherProvider>


        <Navbar />
        {/* <MasterPage /> */}
        <ForecastHourly /> 

      </WeatherProvider>
    </div>
  );
}

export default App;
