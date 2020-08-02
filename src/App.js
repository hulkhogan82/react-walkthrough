import React, { Component } from 'react'
import Table from './components/Table'
import HelloWorld from './components/HelloWorld'
import Form from './components/Form'

class App extends Component {
  state = {
    characters: [],
    data:[],
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
  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
      //'https://gateway.marvel.com:443/v1/public/characters?apikey=399be848cd869eff0ef2177690b0ef8a'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,          
        })
      })
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }
  render() {
    const { characters } = this.state;
    const { data } = this.state;
    //const result = [];
    console.log(data);
    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })
    
    return (
      <div>
        <header></header>
        <main>
          <HelloWorld></HelloWorld>
          <div className="container">
            <Form handleSubmit={this.handleSubmit}></Form>
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <ul>{result}</ul>
          </div>
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default App