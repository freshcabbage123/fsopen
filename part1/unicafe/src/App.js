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
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.text}: {props.value}</p>
    </div>
  )
}
const Statistics = (props) => {
  const average = (props.good - props.bad) / (props.good + props.bad + props.neutral)
  const pos = props.good * 100 / (props.good + props.bad + props.neutral)
  const pos_percentage = pos.toString() + "%"
  if (props.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text="Good" value ={props.good} />
      <StatisticLine text="Neutral" value ={props.neutral} />
      <StatisticLine text="Bad" value ={props.bad} />
      <StatisticLine text="Average" value ={average} />
      <StatisticLine text="Positive Percentage" value ={pos_percentage}/>
    </div>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = "Give Feedback"
  const title2 = "Statistics"
  const total = good + bad + neutral
  const handleGood = () => {
    setGood(good + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  return (
    <div>
      <Header title={title} />
      <Button handleClick={handleGood} text='Good' />
      <Button handleClick={handleNeutral} text='Neutral' />
      <Button handleClick={handleBad} text='Bad' />
      <Header title={title2} />
      <Statistics good={good} bad={bad} neutral={neutral} total={total} />
    </div>
  )
}
export default App