import React, {useState, useEffect} from 'react'
import axios from 'axios'

const CountryDetails = ({country}) => {

  const [weather, setWeather] = useState([])

  useEffect(() => {
    axios
      .get('http://api.weatherapi.com/v1/current.json?key='+process.env.REACT_APP_API_KEY+'&q='+country.capital)
      .then(response => {
        setWeather(response.data)
      })
  })


  const imageStyle = {
    height: '100px',
    width: '150px'
  }

  if (weather.location) {
    return (
      <div>
        <h2> {country.name} </h2>
          <p>Capital : {country.capital} </p>
          <h3>Spoken Languages</h3>
          <ul>
            {country.languages.map(language => 
            <li key = {language.iso639_1}>{language.name}</li>
            )}
          </ul>
          <img style={imageStyle} src = {country.flag} alt = {country.name}></img>
          <h3>Weather in {country.name} </h3>
          <p><strong>Temperature: </strong>{weather.current.temp_c} Celcius </p>
          <img src={weather.current.condition.icon} alt={weather.current.condition.text}/>
          <p><strong>Wind: </strong>{weather.current.wind_kph} kph direction {weather.current.wind_dir} </p>
      </div>
    )
  }

  return (
    <div>Waiting for response</div>
  )

  
}

export default CountryDetails