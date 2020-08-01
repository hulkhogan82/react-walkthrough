import React, { Component } from 'react'

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
const TableBody = (props) => {
  console.log("Inside tablebody component")
  console.log(props.characterData);
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  });
  
  return <tbody>{rows}</tbody>  
}

class Table extends Component {
  render() {
    console.log("Inside Table Component");
    console.log(this.props);
    const {characterData} = this.props;
    return (
      <table>
        <TableHeader></TableHeader>
        <TableBody characterData={characterData}></TableBody>
      </table>
    )
  }
}

export default Table