import React from 'react'
import Person from './Person'

const Persons = ({handleDeletePerson, persons, filter}) => {

  return (
    <div>
      {persons.map( person =>
           (person.name.toLowerCase().includes(filter.toLowerCase())) 
           ? <Person
                key = {person.id}
                person = {person} 
                handleDeletePerson = {handleDeletePerson}
                /> 
           : '' 
      )}
    </div>
  )
}

export default Persons