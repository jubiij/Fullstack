import { useState } from 'react'

const Header = () => {
  return <h1>give feedback</h1>
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  if (props.total === 0) {
    return "No feedback given"
  }
  return (
  <div>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {props.total}</p>
    <p>average {props.average}</p>
    <p>positive {props.positive} %</p>
  </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  // tallennetaan kaikki klikit totaliin
  const [total, setTotal] = useState(0)
  
  let average = (good - bad) / total
  let positive = good / total * 100

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
      <Statistics good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  average={average}
                  positive={positive}
                  />
    </div>
  )
}

export default App