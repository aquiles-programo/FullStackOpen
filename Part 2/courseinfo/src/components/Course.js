import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = ({parts}) => {
  return (
    <>
      { parts.map(part => <Part key = {part.id} part = {part.name} exercises = {part.exercises} />) }
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Total = ({parts}) => {
  let total = parts.map(part => part.exercises).reduce((s, p) => s + p)
  return (
    <>
      <p>Total of { total } exercises</p>
    </>
  )
}

const Course = ({course}) => {

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course