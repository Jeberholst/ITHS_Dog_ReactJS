import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { dogDataRows, fetchAllData } from './DataFetcher';

class DogInfo extends Component {
  render(){
    return (
        <React.Fragment>

               <h1>Dog information</h1>

               <Button variant="contained" color="primary" onClick={fetchAllDataa}>Fetch data</Button>

               <div id="dog-info">Här kommer det synas</div>

        </React.Fragment>
  
    );
  }
}

const fetchAllDataa = async () => {

    const result = await fetchAllData()
    // do something else here after firstFunction completes
    console.log(dogDataRows)

     const divEle = document.getElementById("dog-info")

    dogDataRows.forEach(props => {
      const newDog = document.createElement("p")
      newDog.textContent = props.name + "  " + props.sex

      divEle.appendChild(newDog)

    });

 
  

}

export default DogInfo;