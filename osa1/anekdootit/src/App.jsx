import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  // tehdään array jossa jokaisen alkion arvo on 0
  // ja arrayn pituudeksi tulee anecdotes.length (tässä tapauksessa 8)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const mostVotes = votes.indexOf(Math.max(...votes)) 

  // clickhandler joka antaa randomin anekdootit - anekdootti arraysta
  const handleClick = () => {
  let random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  // ääni valitulle anekdootille
  const addVote = (i) => {
    const copy = [...votes]
    copy[i] = copy[i] + 1
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p> {anecdotes[selected]}<br></br>
        has {votes[selected]} votes</p>
      <Button onClick={() => addVote(selected)} text="vote" />
      <Button onClick={handleClick} text="next anecdote"/>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVotes]}<br></br>
      has {votes[mostVotes]} votes</p>
    </div>
  )
}

export default App