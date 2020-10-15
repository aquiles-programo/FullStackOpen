import React, { useState } from 'react'

const PersonForm = ({persons, handleSetperson}) => {
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handlePersonAdd = (event) => {
    event.preventDefault()
    if (newName.length === 0 || newPhone.length === 0 ) {
      alert('You must fill both fields')
    } else if (!persons.find(person => person.name === newName)) {
      handleSetperson(persons.concat({ name: newName, phone: newPhone}))
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
    </div>
  )
}

export default PersonForm