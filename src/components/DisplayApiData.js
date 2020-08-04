import React from 'react'

const DisplayApiData = (props) => {
    //console.log('DisplayApiData');
    //console.log(props);
    const { apiResults } = props
    return (
      <ul>{apiResults}</ul>
    )  
  }

  export default DisplayApiData