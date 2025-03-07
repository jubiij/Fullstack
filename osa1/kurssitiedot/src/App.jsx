const App = () => {
const Header = () => {
  return (
      <h1>{course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <Part part={course.parts[0].name} exercises={course.parts[0].exercises}/>
      <Part part={course.parts[1].name} exercises={course.parts[1].exercises}/>
      <Part part={course.parts[2].name} exercises={course.parts[2].exercises}/>
    </div>
  )
}

const Total = () => {
  return (
    <div>
      <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    </div>
  )
}

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
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total  parts={course.parts}/>
    </div>
  )
}

export default App