import React, { Component } from 'react'
import Table from './components/Table'
import HelloWorld from './components/HelloWorld'
import Form from './components/Form'
import DisplayApiData from './components/DisplayApiData';
import { fetchWikiData2 } from './Api';
class App extends Component {
  state = {
    characters: [],
    data: [],
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
    console.log('componentDidMount');
    fetchWikiData2()
      .then((result) => {
        console.log('Promise result');
        console.log(result);
        this.setState({ data: result });
      })
      .catch((error) => {
        console.log(error)
      })

  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }
  render() {
    const { characters } = this.state;
    const { data } = this.state;
    console.log('render:this.state');
    console.log(this.state);
    console.log('data');
    console.log(data);
    const result = data.map((entry, index) => {
      return <li key={index}>({index}) {entry} </li>
    })

    return (
      <div>
        <header></header>
        <main>
          <HelloWorld></HelloWorld>
          <div className="container">
            <Form handleSubmit={this.handleSubmit}></Form>
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <DisplayApiData apiResults={result}></DisplayApiData>
          </div>
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default App