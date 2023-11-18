import { useState } from 'react'
import Forecast from './components/Forecast'
import CurrentWeather from './components/CurrentWeather'
import CitySelect from './components/CitySelect'
import './App.css'

function App() {

  const [city, setCity] = useState("Brno")

  function handleCityChange(newCity) {
    setCity(newCity)
  }

  return (
    <div className="App">

      <div className="container">

        <h1>My Weather App</h1>

        <CitySelect city={city} changeCity={handleCityChange} />

        <div className="weather">

          <CurrentWeather city={city} />

          <Forecast city={city} />

        </div>

      </div>

    </div>
  )
}

export default App
