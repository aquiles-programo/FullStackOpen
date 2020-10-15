import React, { useState } from 'react'

const Filter = ({handleSetFilter}) => {
  const [ filter, setFilter] = useState('')

  const handleFilter = (event) => {
    handleSetFilter(event.target.value)
    setFilter(event.target.value)
  }
  return (
    <div>
      Filter shown with <input onChange = {handleFilter} value = {filter} />
    </div>
  )

}

export default Filter