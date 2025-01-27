const Persons = ({persons, newFilter}) => {
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
      <p key={item.name}> 
        {item.name} {item.number}
      </p>
    ))}
  </div> 
  )
}

export default Persons