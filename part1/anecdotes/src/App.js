import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <p>Has {props.number} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  // New Array
  const points = new Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(Math.floor(Math.random() * 6));
  const [allClicks, setAll] = useState(points)
  const vote = () => {
    const copy = [...allClicks]
    copy[selected] += 1
    setAll(copy)
  }
  console.log(allClicks)
  return (
    <div>
      <Header title={"Anecdote of the Day"} text={anecdotes[selected]} number={allClicks[selected]} />
      <Button handleClick={vote} text={"Vote"} />
      <Button handleClick={() => setSelected(Math.floor(Math.random() * 6))} text={"Next Anecdote"} />
      <Header title={"Anecdote with the Most Votes"} text={anecdotes[allClicks.indexOf(Math.max(...allClicks))]} number={Math.max(...allClicks)} />
    </div>
  )
}

export default App