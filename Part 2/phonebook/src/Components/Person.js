import React from 'react'

const Person = ({handleDeletePerson, person}) => {

  const handleDeleteButtonClick = () => {
    console.log(person.id);
    if (window.confirm(`Are you sure you want to delete ${person.name} from the phonebook?`)) { 
      handleDeletePerson(person.id)
    }
    
  }
  return (
    <div>
      {person.name} {person.phone} 
      <button onClick = {handleDeleteButtonClick}>Delete</button>
    </div>
  )
}

export default Person