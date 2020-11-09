import React, { useState, useEffect } from 'react'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import Filter from './Components/Filter'
import PersonService from './Services/Persons'
import Notification from './Components/Notification'

import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [notification, setnotification] = useState({message: null, type: null})

  useEffect(() => {
    PersonService
      .getAll()
      .then(res => {
        setPersons(res)
      })
  }, [])

  const handleSetperson = (addedPerson) => {
    PersonService
      .create(addedPerson)
      .then(response => {
        setPersons(persons.concat({name: response.name, phone: response.phone, id: response.id}))
        setnotification({
          message: `${response.name} has been added to the phonebook`,
          type: 'success'
        })
        setTimeout(() => {
          setnotification({message: null, type: null})
        }, 5000)
      }).catch(err => {
        setnotification({
          message: err.response.data.error,
          type: 'error'
        })
        setTimeout(() => {
          setnotification({message: null, type: null})
        }, 5000)
      })
  }

  const handleDeletePerson = (id) => {
    const deleted = persons.find(p => p.id === id)
    PersonService
      .delet(id)
      .then(res => {
        setPersons(persons.filter(p => p.id !== id))
        setnotification({
          message: `${deleted.name} has been removed from server`,
          type: 'error'
        })
        setTimeout(() => {
          setnotification({message: null, type: null})
        }, 5000)
      })
  }

  const handleSetFilter = (filter) => {
    setFilter(filter)
  }

  const handleEditPerson = (person) => {
    PersonService
      .update(person.id, person)
      .then(res => {
        setPersons(persons.map(p => p.id === person.id
          ? person
          : p
          ))
      })
      .catch(err => {
        setnotification({
          message: err.response.data.error,
          type: 'error'
        })
        setTimeout(() => {
          setnotification({message: null, type: null})
        }, 5000)
      })
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message = {notification.message} type = {notification.type} />

      <Filter handleSetFilter = {handleSetFilter} />      

      <PersonForm
        persons = {persons}
        handleSetperson = {handleSetperson}
        handleEditPerson = {handleEditPerson}
      />

      <h2>Numbers</h2>

      <Persons
        handleDeletePerson = {handleDeletePerson}
        persons = {persons}
        filter = {filter}
      />
    </div>
  )
}


export default App