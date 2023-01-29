import './App.css';
import Forecast from './Forecast';

function App() {

  return (
    <div className="container">
      <div className="weather-wrap border-bottom">
        <form id="search-form">
          <div className="row mb-3">
            <div className="col-10">
              <input
                type="search"
                placeholder="Type a city .."
                className="form-control"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w100"
              />
            </div>
          </div>
        </form>
        <div className="weather-info">
          <div className="row">
            <div className="col-6 d-flex">
              <img alt="partly_cloudy" src='https://ssl.gstatic.com/onebox/weather/64/sunny.png' />
              <strong>12</strong>
              <span className="units">
                <div className="active-unit">°C </div>
              </span>

              <ul className="weather-points">
                <li>Humidity: 74%</li>
                <li>Wind: 3 km/h</li>
              </ul>
            </div>
            <div className="col-6 text-end city-info">
              <h1>Lisbon, PT </h1>
              <ul>
                <li>Last updated: Sunday 14:13</li>
                <li>Clear</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='weather-forecast'>
          
            <Forecast />
         
          </div>
        
      </div>
      <small>        <a href="https://github.com/cweet-dreams/weather-app-vanilla"> Open-source code </a> by Svetlana Apolokhova</small>
    </div>
  );
}

export default App;
