import React from 'react'
import Country from './Country'
import CountryDetails from './CountryDetails'

const Countries = ({countries}) => {
  if (countries.length === 1) {
    const country = countries[0]
    return (
      <div>
        <CountryDetails country = {country} />
      </div>
    )

  } else if (countries.length > 10) {
    return (
      <div>
        Too many matches, spcify another filter
      </div>
    )
  } else {
    return (
      <div>
        { countries.map(country => <Country key = {country.name} country = {country} /> ) }
      </div>
    )
  }
}
export default Countries