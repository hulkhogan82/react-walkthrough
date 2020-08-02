import React, { Component } from 'react'
import Table from './components/Table'
import HelloWorld from './components/HelloWorld'
import Form from './components/Form'

class App extends Component {
  state = {
    characters: [
    ],
  }
  removeCharacter = (index) => {
    const { characters } = this.state;
    //filtering
    const filteredCharacters = characters.filter((character, i) => {
      return i !== index;
    });
    //setting state back for characters
    this.setState({ characters: filteredCharacters });
  }
  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }
  render() {
    const { characters } = this.state;
    return (
      <div>
        <header></header>
        <main>
          <HelloWorld></HelloWorld>
          <div className="container">
            <Form handleSubmit={this.handleSubmit}></Form>
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
          </div>
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default App