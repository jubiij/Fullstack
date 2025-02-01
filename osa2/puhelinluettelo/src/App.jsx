import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'
const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
        .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault() 
    const personObject = {
      name: newName,
      number: newNumber
    }
    
    const nameExists = persons.find(person => person.name === newName)
    if(nameExists) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const id = nameExists.id
        const changedPerson = {...nameExists, number: newNumber}
        personService
          .update(id, changedPerson)
            .then(returnedPerson => {
              setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
              setErrorMessage(`Number was changed for ${newName}`)
              setTimeout(() => {
                setErrorMessage(null)
              }, 2000)
            })
            .catch(error => {
              setErrorMessage(`Error updating ${newName}`)
              setTimeout(() => {
                setErrorMessage(null)
              }, 2000)
            })
      }
    } else {
      personService
        .create(personObject)
          .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setErrorMessage(` Added ${newName} `)
          setTimeout(() => {
            setErrorMessage(null)
          }, 2000)   
        })
        .catch(error => {
          setErrorMessage(`error adding ${newName}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 2000)   
        })
    }
    // tyhjentää lomakekentät
    setNewName('')
    setNewNumber('')
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
      <Notification message={errorMessage} />
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
      <Persons persons={persons} setPersons={setPersons}  newFilter={newFilter} setErrorMessage={setErrorMessage}/>
    </div>
  )

}

export default App