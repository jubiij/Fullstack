import { useState } from 'react'

const Header = () => {
  return <h1>give feedback</h1>
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  // tallennetaan kaikki klikit totaliin
  const [total, setTotal] = useState(0)

  // Käsitellään klikkaukset hyvälle
  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  // Käsitellään klikkaukset neutraalille
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <Header />
      <Button onClick={handleGoodClick} text="good"/>
      <Button onClick={handleNeutralClick} text="neutral"/>
      <Button onClick={handleBadClick} text="bad"/>
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>average {(good - bad) / total}</p>
    </div>
  )
}

export default App