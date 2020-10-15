import React, { useState } from 'react'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import Filter from './Components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])
  const [filter, setFilter] = useState('')

  const handleSetperson = (persons) => {
    setPersons(persons)
  }

  const handleSetFilter = (filter) => {
    setFilter(filter)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSetFilter = {handleSetFilter} />      

      <PersonForm persons = {persons} handleSetperson = {handleSetperson} />

      <h2>Numbers</h2>

      <Persons persons = {persons} filter = {filter} />
    </div>
  )
}


export default App