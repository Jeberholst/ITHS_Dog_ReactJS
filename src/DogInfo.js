import { Button } from '@material-ui/core';
import React, { Component } from 'react';
 import { fetchAllData } from './DataFetcher';

class DogInfo extends Component {
  render(){
    return (
        <React.Fragment>

               <h1>Dog information</h1>

               <Button variant="contained" color="primary" onClick={CreateDogInfo}>Fetch data</Button>

        </React.Fragment>
  
    );
  }
}

function CreateDogInfo(){
  const data = fetchAllData()

  console.log(data)


}

export default DogInfo;