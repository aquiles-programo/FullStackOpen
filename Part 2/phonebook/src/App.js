import React, { useState } from 'react'
import Person from './Components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const handlePersonAdd = (event) => {
    event.preventDefault()
    if (newName.length === 0 || newPhone.length === 0 ) {
      alert('You must fill both fields')
    } else if (!persons.find(person => person.name === newName)) {
      setPersons(persons.concat({ name: newName, phone: newPhone}))
      setNewName('')
      setNewPhone('')
    } else {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewPhone('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      Filter shown with <input onChange = {handleFilter} value = {filter} />
      <form>
        <h2>Add a new</h2>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>number: <input onChange = {handlePhoneChange} value = {newPhone} /></div>
        <div>
          <button onClick={handlePersonAdd} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        { persons.map( person =>
           (person.name.toLowerCase().includes(filter.toLowerCase())) 
           ? <Person key = {person.name} person = {person} /> 
           : '' 
           )
        }
      </div>
    </div>
  )
}

export default App