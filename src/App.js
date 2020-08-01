import React, { Component } from 'react'
import Table from './components/Table'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  render() {
    return (
      <div>
        <header></header>
        <main>
          <HelloWorld></HelloWorld>
          <div className="container">
            <Table />
          </div>
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default App