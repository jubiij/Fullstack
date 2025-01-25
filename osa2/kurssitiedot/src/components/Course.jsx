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

 
export default Course