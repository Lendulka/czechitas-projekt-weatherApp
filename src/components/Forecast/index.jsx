import { useState, useEffect } from 'react'
import { getDatefromUnix, getDayfromUnix } from '../../helpers/unixTime'
import Loading from '../Loading'
import Error from '../Error'
import './style.css'

const Forecast = ({ city }) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(null)
    const key = import.meta.env.VITE_SOME_KEY

    useEffect(
        () => {
            setIsLoading(true)
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${key}`)
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    setData([
                        json.list[0],
                        json.list[8],
                        json.list[16],
                        json.list[24],
                        json.list[32],
                    ])
                    setIsLoading(false)
                })
                .catch(error => {
                    setIsError(error)
                    setIsLoading(false)
                })
        }, [city]
    )

    if (data === null || data === undefined) {
        return <></>
    }

    if (isError) {
        return <Error />
    }

    return (
        <div className="weather__forecast" id="predpoved">
            {isLoading ? <Loading />
                :
                data.map(forecast => (
                    <div key={forecast.dt} className="forecast">
                        <div className="forecast__day">
                            {getDayfromUnix(forecast.dt)} {getDatefromUnix(forecast.dt)}
                        </div>
                        <div className="forecast__icon">
                            <img
                                src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                                style={{ height: "100%" }}
                                alt="forecast weather icon"
                            />
                        </div>
                        <div className="forecast__temp">{Math.round(forecast.main.temp)} °C</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Forecast