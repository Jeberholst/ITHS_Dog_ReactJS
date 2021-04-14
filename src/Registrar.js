import { Button, Container, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import FetchedData from './DogFetchedData.json';
import { dogDataRows, fetchAllData, createData, clearDogData, convertToProperCase } from './DataFetcher';
import ReactDOM from 'react-dom';

const cardStyle = {
  width: 400,
  height: 50,
  padding: 5,
  paddingTop: 5,
  marginBottom: 5,
};

class Registrar extends Component {
  render(){
    return (
        <React.Fragment>


               <h1>Registrar</h1>

               <Button variant="contained" color="primary" onClick={fakeFetchData}>Fetch data</Button>

               <div id="dog-info">Här kommer det synas</div>

        </React.Fragment>
  
    );
  }
}


const fakeFetchData = async () => {

  const fakeData = FetchedData
  clearDogData()
  console.log(fakeData)
  
  fakeData.forEach(props => {
                  
      dogDataRows.push(createData(
            props.name, 
            props.sex, 
            props.breed, 
            props.img, 
            props.present, 
            props.age, 
            props.chipNumber, 
            { 
              name: props.owner.name,
              lastName: props.owner.lastName,
              phoneNumber: props.owner.phoneNumber,
            },
      ));
    
  });
  
  const element = document.getElementById('dog-info')
  ReactDOM.render(CreateTable(), element)
}

function CreateTable() {
  return (
    <React.Fragment>
        {dogDataRows.map((row) => (
            <Card key={row.breed} row={row} />
          ))}
    </React.Fragment>
  );
}


function Card(props) {
  const { row } = props;

  return (
    <React.Fragment>

        <Container className='card-container' style={cardStyle} component={Paper}>
            <InfoContainer props={props}/>
       </Container>
    </React.Fragment>
  );
}

function InfoContainer(props){

  const { row } = props.props;

  
  var dogOwnerInfo = ''
  row.owner.map((owner) => (
     dogOwnerInfo = convertToProperCase(owner.name) + ' ' + owner.lastName + ' - ' + owner.phoneNumber
  ))

  return (
    <React.Fragment>
          <div className="owner-info">
              <AddRow mValue={dogOwnerInfo}/>
          </div>

    </React.Fragment>
  );

     
}

function AddRow(props){
  
  let propVal = props.mValue;

  return(
     <p>
      {propVal}  
    </p>
  );
}

export default Registrar;