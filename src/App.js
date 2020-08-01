import React, { Component } from 'react'
import Table from './components/Table'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  render() {
    const characters= [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ];
    return (
      <div>
        <header></header>
        <main>
          <HelloWorld></HelloWorld>
          <div className="container">
            <Table characterData={characters}/>
          </div>
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default App