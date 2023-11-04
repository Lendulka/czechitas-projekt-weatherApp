import { useState, useEffect } from 'react'
import { getTimefromUnix } from '../../helpers/unixTime'
import Loading from '../Loading'

const CurrentWeather = ({ city }) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(
        () => {
            setIsLoading(true)
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bf9e054642605916e4aedf38cfdad5b3`)
                .then(response => response.json())
                .then(json => {
                    if (json.cod === 200) {
                        setData(json)
                        console.log(json)
                    } else { setIsError(true) }
                    setIsLoading(false)
                })
        }, [city]
    )

    if (data === null || data === undefined || isError) {
        return <></>
    }

    return (
        <div className={Math.round(data.main.temp) < 10 ?
            "weather__current  weather__current--cold" : "weather__current"}>

            {isLoading ? <Loading />
                : (
                    <>
                        <h2 className="weather__city" id="mesto">
                            {city}, {data.sys.country}
                        </h2>
                        <div className="weather__inner weather__inner--center">
                            <div className="weather__section weather__section--temp">
                                <span className="weather__temp-value" id="teplota">
                                    {Math.round(data.main.temp)}
                                </span>
                                <span className="weather__temp-unit">°C</span>
                                <div className="weather__description" id="popis">
                                    {data.weather[0].description}
                                </div>
                            </div>
                            <div
                                className="weather__section weather__section--icon"
                                id="ikona"
                            >
                                <img
                                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                    alt="current weather icon"
                                />
                            </div>
                        </div>
                        <div className="weather__inner">
                            <div className="weather__section">
                                <h3 className="weather__title">Wind</h3>
                                <div className="weather__value">
                                    <span id="wind">{data.wind.speed.toFixed(1)}</span> km/h
                                </div>
                            </div>
                            <div className="weather__section">
                                <h3 className="weather__title">Humidity</h3>
                                <div className="weather__value">
                                    <span id="humidity">{data.main.humidity}</span> %
                                </div>
                            </div>
                        </div>
                        <div className="weather__inner">
                            <div className="weather__section">
                                <h3 className="weather__title">Sunrise</h3>
                                <div className="weather__value">
                                    <span id="sunrise">{getTimefromUnix(data.sys.sunrise)}</span>
                                </div>
                            </div>
                            <div className="weather__section">
                                <h3 className="weather__title">Sunset</h3>
                                <div className="weather__value">
                                    <span id="sunset">{getTimefromUnix(data.sys.sunset)}</span>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}





export default CurrentWeather