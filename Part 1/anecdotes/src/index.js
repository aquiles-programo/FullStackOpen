import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const MostVoted = ({votes}) => {
  let mostVoted = 0
  let topIndex = -1

  for (let index = 0; index < votes.length; index++) {
    if (mostVoted < votes[index]) {
      mostVoted = votes[index]
      topIndex = index
    }
  }
  if (mostVoted > 0) {
    return (
      <div>
        <h2>Anecdote with most votes</h2>
        {anecdotes[topIndex]} <br/>
        has {mostVoted} votes
      </div>
    )
  }
  return (
    <div>
      <h2>Start voting to get the most voted anecdote</h2>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleVote = () => {
    const votesCopy = [...votes]
    votesCopy[selected] +=1
    setVotes(votesCopy)
  }

  const handleNext = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  return (
    <>
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]} <br/>
      has {votes[selected]} votes
    </div>
    <div>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
    </div>
    <div>
      <MostVoted votes={votes}/>
    </div>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)