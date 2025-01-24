import { useState } from 'react'

const Header = () => {
  return <h1>give feedback</h1>
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticsLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )

}

const Statistics = (props) => {
  if (props.total === 0) {
    return "No feedback given"
  }
  return (
  <div>
    <StatisticsLine text="good" value={props.good}/>
    <StatisticsLine text="neutral" value={props.neutral}/>
    <StatisticsLine text="bad" value={props.bad}/>
    <StatisticsLine text="total" value={props.total}/>
    <StatisticsLine text="average" value={props.average}/>
    <StatisticsLine text="positive" value={props.positive + ' %'} /> 
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

  // Buttonin olis voinu toteuttaa eritavalla ilman handleClick good/neutral/bad 
  // esim: <Button handleClick={() => setGood(good + 1)} text="good"

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