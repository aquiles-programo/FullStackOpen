import React from 'react'
import Person from './Person'

const Persons = ({persons, filter}) => {

  return (
    <div>
      {persons.map( person =>
           (person.name.toLowerCase().includes(filter.toLowerCase())) 
           ? <Person key = {person.name} person = {person} /> 
           : '' 
      )}
    </div>
  )
}

export default Persons