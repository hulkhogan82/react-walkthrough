import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
    render() {
      return (
          /*
        <div className="App">
          <h1>Hello, React!</h1>
        </div>
        */
        <div className="container">
        <Table characterData={characters}/>
      </div>
      )
    }
  }

  export default App