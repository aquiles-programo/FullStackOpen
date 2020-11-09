import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './Components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [filtered, setFiltered] = useState([])
  let added = []

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (e) => {
    added = []
    setFilter(e.target.value)
    countries.map(country => {
      if (country.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        added.push(country)
      }
      return ''
    })
    setFiltered(added)
  }

  return (
  <div>
    <div>
      find countries <input onChange = {handleFilterChange} value = {filter} />
    </div>
    <div>
      <Countries countries = {filtered} />
    </div>
  </div>
  )
}

export default App;
