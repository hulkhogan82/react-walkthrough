import React, { Component } from 'react'
import Table from './components/Table'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    characters: [
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
    ],
  }
  removeCharacter = (index) => {
    const {characters} = this.state;
     //filtering
     const filteredCharacters = characters.filter((character, i) => {
        return i !== index;
     });
     //setting state back for characters
     this.setState({characters: filteredCharacters});
  }
  render() {
    const {characters} = this.state;
    return (
      <div>
        <header></header>
        <main>
          <HelloWorld></HelloWorld>
          <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter}/>
          </div>
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default App