import React from 'react'
import { Container, Paper } from '@material-ui/core';
import { selectedDog, convertToProperCase } from './DataFetcher';
import ReactDOM from 'react-dom';

const cardStyle = {
  width: 400,
  height: 'fit-content',
  padding: 5,
  paddingTop: 15,
  marginBottom: 5,
};


const ContainerMoreDogInfoOriginal = () => {

    console.log(selectedDog)

    return(
      <React.Fragment>
        <CreateContainer></CreateContainer>
      </React.Fragment>
    )

}

function AddRow(props){
  
  let propVal = props.mValue;

  return(
     <p>
      {propVal}  
    </p>
  );
}

function CreateContainer() {

  return (
    <React.Fragment>
        <Container className='card-container' style={cardStyle} component={Paper}>
            <ImageContainer/>
            <InfoContainer/>
       </Container>
    </React.Fragment>
  );
}

function InfoContainer(){

  const dogInfo = convertToProperCase(selectedDog.props.breed) + ', ' + selectedDog.props.age + ' år, ' + convertToProperCase(selectedDog.props.sex)
  const dogInfoExtra = selectedDog.props.chipNumber
  const dogOwnerInfo = convertToProperCase(selectedDog.props.ownerName) + ', ' + convertToProperCase(selectedDog.props.ownerLastName)

  return (
    <React.Fragment>
        <div className="dog-name">
            {selectedDog.name}
          </div>

          <div className="dog-info">

              <AddRow mValue={dogInfo}/>
              <IsPresent present={selectedDog.props.present}/>
              <AddRow mValue={dogInfoExtra}/>
              <AddRow mValue={dogOwnerInfo}/>
              
          </div>

    </React.Fragment>
  );

      
}

function IsPresent(props) {
  const isPresent = props.present

  if(isPresent){
    return (
      <AddRow mValue={'Närvarande'}/>
    );
  } else {
    return (
      <AddRow mValue={'Frånvarande'}/>
    );

  }


}

function ImageContainer() {

  const imageStyle = {
    width: "100%",
    height: 300,
    backgroundImage: `url(${selectedDog.props.img})`,
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

export default ContainerMoreDogInfoOriginal;

