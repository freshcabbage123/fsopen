const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <p>Course {props.course}</p>
    </div>
  )
}
const Content = ({parts}) => {
  return (
    <div>
        <Part1 part1={parts[0]["name"]} exercises1 = {parts[0]["exercises"]}/>
        <Part2 part2={parts[1]["name"]} exercises2 = {parts[1]["exercises"]}/>
        <Part3 part3={parts[2]["name"]} exercises3 = {parts[2]["exercises"]}/>
    </div>
  )
}
const Total = ({parts}) => {
  return (
    <div>
      <p>Number of exercises {parts[0]['exercises'] + parts[1]['exercises'] + parts[2]['exercises']}</p>
    </div>
  )
}

const Part1 = (props) => {
  return (
    <div>
      <p>{props.part1} {props.exercises1}</p>
    </div>
  )
}
const Part2 = (props) => {
  return (
    <div>
      <p>{props.part2} {props.exercises2}</p>
    </div>
  )
}
const Part3 = (props) => {
  return (
    <div>
      <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}

export default App