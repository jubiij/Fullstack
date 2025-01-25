const App = () => {
  const Course = ({ course }) => {
    return(
      <div>
      <Header name={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      </div>
    )
  }

  const Header = ({ name }) => { 
    console.log('mikäs on nimi', name)
    return <h1>{name}</h1>
  }
  
  const Part = ( {part, exercises} ) => {
    return (
      <div>
        <p>
          {part} {exercises}
        </p>
      </div>
    )
  }
  
  const Content = ( {parts} ) => {
    return (
      <div> 
      {parts.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
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
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  
   
    return (
      <div>
        <Course course={course} />
      </div>
    )
  }
  
  export default App