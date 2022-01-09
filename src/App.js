import React, {useState} from 'react'
import './App.css'

function App() {
  const [address, setAddress] = useState('')

  return (
    <div className="App">
      <button className="Button" onClick={() => {connect(setAddress)}}>connect</button>
      <h2>address: {address}</h2>
    </div>
  )
}

const connect = async function(setAddress) {
  const ethereum = window.ethereum;
  if (ethereum) {
    const accounts = await ethereum.request({method: 'eth_requestAccounts'})
    setAddress(accounts[0])
  } else {
    console.error('no wallet')
  }
}

export default App
