import React, {Component} from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }
  const TableBody = () => {
    return (
        <tbody />
        /* Version 1
      <tbody>
        <tr>
          <td>Charlie</td>
          <td>Janitor</td>
        </tr>
        <tr>
          <td>Mac</td>
          <td>Bouncer</td>
        </tr>
        <tr>
          <td>Dee</td>
          <td>Aspiring actress</td>
        </tr>
        <tr>
          <td>Dennis</td>
          <td>Bartender</td>
        </tr>
      </tbody>
      */
    )
  }

class Table extends Component {
  render() {
    const {characterData} = this.props

    const characters = [
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
      ]
  
      return (
        <table>
          <TableHeader />
          <TableBody characterData={characterData} />
        </table>
      )

    /* return (
        <div className="container">
        <Table />
      </div>
      <table>
          <TableHeader></TableHeader>
          <TableBody />
      </table>
      
    )*/
  }
}


export default Table