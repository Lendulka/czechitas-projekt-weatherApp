
import { useState } from 'react'
import { cities } from '../../helpers/unixTime'

const CitySelect = ({ changeCity }) => {

    const [selectCity, setSelectCity] = useState("Brno")

    return (
        <div className="select-wrapper">
            <select
                className="select"
                name="cityselect"
                id="cityselect"
                value={selectCity}
                onChange={
                    e => { changeCity(e.target.value); setSelectCity(e.target.value) }
                }
            >
                {cities.map(oneCity => <option key={oneCity} value={oneCity}>{oneCity}</option>)}

            </select>
        </div>
    )
}

export default CitySelect
