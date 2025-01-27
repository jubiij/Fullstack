import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault() 
    
    // palauttaa true jos yksikin henkilö taulukossa täyttää ehdon ( person.name === newName)
    const nameExists = persons.some(person => person.name === newName)

    if(nameExists == true) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({name: newName, number: newNumber}))
      // tyhjentää lomakekentän
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with<input value={newFilter} onChange={handleFilterChange}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} /> 
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/> 
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter((item) => {
        // tarkistetaan onko newFilter tyhjä
        // newFilter.toLowerCase() === '' jos filter kenttä on tyhjä arvo on true
        return newFilter.toLowerCase() === '' 
        ? item  // ternary operator, jos suodatin on tyhjä eli palauttaa kaikkien henkilöiden nimet ja numerot
        : item.name.toLowerCase().includes(newFilter) // jos suodatin ei ole tyhjä palautetaan true tai false. Sisältääkö newFilter henkilön nimeä (item.name)
      })                                                
      // kun filter on suodattanut henkilöt näytetään ne sivulla
      .map((item) => (
        <p key={item.name}> {item.name} {item.number}</p>
      ))
      }
   
   {/*    {persons.map(person => (
      <p key={person.name}> {person.name} {person.number} </p> ))} */}
    </div>
  )

}

export default App