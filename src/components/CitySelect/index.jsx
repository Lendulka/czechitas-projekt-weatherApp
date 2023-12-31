
import { cities } from '../../helpers/unixTime'
import './style.css'

const CitySelect = ({ city, changeCity }) => {

    return (
        <div className="select__wrapper">
            <select
                className="select"
                name="cityselect"
                id="cityselect"
                value={city}
                onChange={
                    (e) => { changeCity(e.target.value) }
                }
            >
                {cities.map(oneCity => <option key={oneCity} value={oneCity}>{oneCity}</option>)}
            </select>
        </div>
    )
}

export default CitySelect
