import axios from 'axios'

const Persons = ({persons, setPersons, newFilter}) => {
  
  const deleteHandler = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
    axios
      .delete(`http://localhost:3001/persons/${id}`)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      })
    } 
  }
  
  return(
  <div>
    {persons.filter((item) => {
      // tarkistetaan onko newFilter tyhjä
      // newFilter.toLowerCase() === '' jos filter kenttä on tyhjä arvo on true
      return newFilter.toLowerCase() === '' 
      ? item  // ternary operator, jos suodatin on tyhjä eli palauttaa kaikkien henkilöiden nimet ja numerot
      : item.name.toLowerCase().includes(newFilter) // jos suodatin ei ole tyhjä palautetaan true tai false. Sisältääkö newFilter henkilön nimeä (item.name)
    })                                                
    // kun filter on suodattanut henkilöt näytetään ne sivulla
    .map((item) => (
      <p key={item.id}> 
        {item.name} {item.number} 
        <button onClick={() => deleteHandler(item.id, item.name)}>delete</button>
      </p>
    ))}
  </div> 
  )
}

export default Persons