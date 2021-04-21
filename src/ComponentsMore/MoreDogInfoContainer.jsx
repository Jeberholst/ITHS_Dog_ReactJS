import React from 'react'
import { Container } from '@material-ui/core';
import { selectedDog, convertToProperCase } from '../DataFetcher';
import InfoLabel from '../InfoLabel';
import './MoreInfo.css'
import * as Colors from '../ColorConstants'

const MoreDogInfoContainer = () => {

    console.log(selectedDog)

    return(
      <React.Fragment>
        <CreateContainer className="card-style"></CreateContainer>
      </React.Fragment>
    )

}

function CreateContainer() {

  return (
    <React.Fragment>
        <Container className="card-container">
            <ImageContainer/>
            <InfoContainer/>
       </Container>
    </React.Fragment>
  );
}

function InfoContainer(){

  const dogOwnerInfo = convertToProperCase(selectedDog.ownerName) + ' ' + convertToProperCase(selectedDog.ownerLastName)

  return (
    <React.Fragment>
          <div className="mdic-row">
              <InfoLabel text={convertToProperCase(selectedDog.breed)} bgColor={Colors.breedColor}/>
              <InfoLabel text={convertToProperCase(selectedDog.age)  + ' år'} bgColor={Colors.ageColor}/>
              <Gender sex={selectedDog.sex}/>
              <IsPresent present={selectedDog.present}/>
          </div>

          <div className="mdic-row">
              <InfoLabel text={selectedDog.chipNumber} bgColor={Colors.chipNumberColor}/>
              <InfoLabel text={dogOwnerInfo} bgColor={Colors.chipNumberColor}/>
              <InfoLabel text={selectedDog.ownerPhoneNumber} bgColor={Colors.chipNumberColor}/>
          </div>
          <div style={{marginTop: 15, marginBottom: 15, padding: 5}}>
          
          </div>
        

    </React.Fragment>
  );

      
}

function IsPresent(props) {
  const isPresent = props.present

  if(isPresent){
    return (
      <InfoLabel text={'Närvarande'} bgColor={Colors.isPresentColor}/>
    );
  } else {
    return (
      <InfoLabel text={'Frånvarande'} bgColor={Colors.isNotPresentColor}/>
    );

  }

}

function ImageContainer() {

  const imageStyle = {
    width: "100%",
    height: 300,
    backgroundImage: `url(${selectedDog.img})`,
    borderRadius: 5,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <React.Fragment>
        <Container style={imageStyle}/>
    </React.Fragment>
  );
}

function Gender({ sex }){

  switch(String(sex)){
      case 'male':
        return (
          <InfoLabel text={convertToProperCase(sex)} bgColor={Colors.sexMaleColor}/>
        );
      case 'female':
        return (
          <InfoLabel text={convertToProperCase(sex)} bgColor={Colors.sexFemaleColor}/>
        );
      default:
        return (
          <InfoLabel text={'Not supplied'} bgColor={"#000000"}/>
        );
  };
}

export default MoreDogInfoContainer;

