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
  
  const Total = ( {parts} ) => {
    const total = parts.reduce((sum, part) => {
      return sum + part.exercises
    }, 0)
    return (
      <div>
        <p><b>total of {total} exercises</b></p>
      </div>
    )
  }
 
  
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
    return (
      <div>
        <h1>Web development curriculum</h1>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
      </div>
    )
  }
  
  export default App