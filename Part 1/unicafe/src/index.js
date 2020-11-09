import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handler, name}) => {
  return (
    <>
      <button onClick={handler}>{name}</button>
    </>
  )
}

const Statistic = ({name, quantity}) => {
  
  return (
    <><td>{name}</td><td>{quantity}</td></>
  )
}

const Statistics = ({names, values}) => {

  if (values[3] === 0) {
    return <div>No feedback given</div>
  }

  return (
    <div>
      <table>
        <thead></thead>
        <tbody>
          <tr><Statistic name={names[0]} quantity={values[0]}/></tr>
          <tr><Statistic name={names[1]} quantity={values[1]}/></tr>
          <tr><Statistic name={names[2]} quantity={values[2]}/></tr>
          <tr><Statistic name={names[3]} quantity={values[3]}/></tr>
          <tr><Statistic name={names[4]} quantity={values[4]}/></tr>
          <tr><Statistic name={names[5]} quantity={values[5]}/></tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = all / 3
  const positive = good > 0 ?  (good * 100) / all : 0 

  const names = ['good', 'neutral', 'bad', 'all', 'average', 'positive']
  const values = [good, neutral, bad, all, average, positive+' %']

  return (
    <div>
      <h2>give feedback</h2>
      <Button handler={() => setGood(good + 1)} name={'good'} />
      <Button handler={() => setNeutral(neutral + 1)} name={'neutral'} />
      <Button handler={() => setBad(bad + 1)} name={'bad'} />
      <h2>statistics</h2>
      <Statistics names={names} values={values} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)