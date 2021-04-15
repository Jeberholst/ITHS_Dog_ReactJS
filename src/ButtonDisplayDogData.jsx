import React, {
    useState, useEffect
} from 'react'
import { Button, Container, Paper } from '@material-ui/core';
import { dogDataRows, convertToProperCase } from './DataFetcher';
import ReactDOM from 'react-dom';

const cardStyle = {
  width: 400,
  height: "100%",
  padding: 5,
  paddingTop: 15,
  marginBottom: 5,
};


const ButtonDisplayDogData = () => {

    return(
        <Button variant="contained" color="primary" onClick={displayData}>Fetch dogInfo</Button>
    )

}

function displayData(){

  const element = document.getElementById('dog-info')
  ReactDOM.render((CreateTable()), element)
}

function AddRow(props){
  
  let propVal = props.mValue;

  return(
     <p>
      {propVal}  
    </p>
  );
}

function Card(props) {
  // const { row } = props;

  return (
    <React.Fragment>

        <Container className='card-container' style={cardStyle} component={Paper}>
            <ImageContainer props={props}/>
            <InfoContainer props={props}/>
       </Container>
    </React.Fragment>
  );
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

function InfoContainer(props){

  const { row } = props.props;
  const dogInfo = convertToProperCase(row.breed) + ', ' + row.age + ' år, ' + row.sex 
  
  var dogOwnerInfo = ''
  row.owner.map((owner) => (
     dogOwnerInfo = convertToProperCase(owner.name) + ' ' + owner.lastName + ' - ' + owner.phoneNumber
  ))

  return (
    <React.Fragment>
        <div className="dog-name">
            {row.name}
          </div>

          <div className="dog-info">

              <AddRow mValue={dogInfo}/>
              <AddRow mValue={dogOwnerInfo}/>
              

          </div>

    </React.Fragment>
  );

      
}

function ImageContainer(props) {
  const { row } = props.props;

  const imageStyle = {
    width: "100%",
    height: 300,
    background: `url(${row.img})`,
    borderRadius: 5,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat"
  };

  return (
    <React.Fragment>
        <Container style={imageStyle}/>
    </React.Fragment>
  );
}

export default ButtonDisplayDogData
