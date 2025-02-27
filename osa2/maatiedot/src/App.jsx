import {useState, useEffect} from 'react'
import axios from 'axios'



const App = () => {
  const [value, setValue] = useState('')
  const [maat, setMaat] = useState([])
  const [filteredMaat, setFilteredMaat] = useState([])

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        setMaat(response.data)
        console.log(response.data) 
      })
  }, []) 
  
  const inputValue = (event) => {
    setValue(event.target.value)
  }
  

  return (
  <div>
   find countries <input value={value} onChange={inputValue}></input>
  </div>
  )
}


export default App