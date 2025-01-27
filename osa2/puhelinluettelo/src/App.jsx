import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

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
      
      <Filter value={newFilter} onChange={handleFilterChange}/>
      
      <h2>add a new</h2>
      
      <PersonForm
        onSubmit={addPerson} 
        nameValue={newName}
        onNameChange={handleNameChange}
        numberValue={newNumber}
        onNumberChange={handleNumberChange}                 
      />
      <h2>Numbers</h2>
      <Persons persons={persons}  newFilter={newFilter}/>
    </div>
  )

}

export default App