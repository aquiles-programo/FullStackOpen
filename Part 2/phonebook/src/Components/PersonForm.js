import React, { useState } from 'react'

const PersonForm = ({persons, handleSetperson, handleEditPerson}) => {
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
    let duplicatedPerson = persons.find(p => p.name.toUpperCase() === newName.toUpperCase())
    if (newName.length === 0 || newPhone.length === 0 ) {
      alert('You must fill both fields')
    } else if (!duplicatedPerson) {
      handleSetperson({ name: newName, phone: newPhone})
    } else if (duplicatedPerson.phone !== newPhone) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) { 
        handleEditPerson({...duplicatedPerson, phone: newPhone })
      }
    }
    setNewName('')
    setNewPhone('')
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