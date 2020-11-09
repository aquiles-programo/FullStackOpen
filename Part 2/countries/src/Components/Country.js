import React, {useState} from 'react'
import CountryDetails from './CountryDetails'

const Country = ({country}) => {
  const [showDetails, setShowDetails] = useState('false')
  
  if (!showDetails) {
    return (
      <div>
        <CountryDetails country = {country} />
      </div>
    )
  } else {
    return (
      <div>
        {country.name} <button onClick = {() => setShowDetails(false)}>Show</button>
      </div>
    )
  }
}

export default Country