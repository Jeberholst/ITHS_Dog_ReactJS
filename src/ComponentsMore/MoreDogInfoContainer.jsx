import React from 'react'
import { Container } from '@material-ui/core';
import { selectedDog, convertToProperCase } from '../DataFetcher';
import InfoLabel from '../InfoLabel';

const breedColor = '#8EA4AA'
const ageColor = '#93A99E'
const sexMaleColor = '#74777C'
const sexFemaleColor = '#B299AD'
const chipNumberColor = '#2d2d2d'
const isPresentColor = '#4D9861'
const isNotPresentColor = '#969492'

const cardStyle = {
  width: 400,
  height: 'fit-content',
  padding: 5,
  paddingTop: 15,
  marginBottom: 5,
};

const MoreDogInfoContainer = () => {

    console.log(selectedDog)

    return(
      <React.Fragment>
        <CreateContainer></CreateContainer>
      </React.Fragment>
    )

}

function CreateContainer() {

  return (
    <React.Fragment>
        <Container className='card-container' style={cardStyle}>
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
          <div style={{marginTop: 15, marginBottom: 15, padding: 5}}>
              <InfoLabel text={convertToProperCase(selectedDog.breed)} bgColor={breedColor}/>
              <InfoLabel text={convertToProperCase(selectedDog.age)  + ' år'} bgColor={ageColor}/>
              <Gender sex={selectedDog.sex}/>
              <IsPresent present={selectedDog.present}/>
          </div>

          <div style={{marginTop: 15, marginBottom: 15, padding: 5}}>
              <InfoLabel text={selectedDog.chipNumber} bgColor={chipNumberColor}/>
              <InfoLabel text={dogOwnerInfo} bgColor={chipNumberColor}/>
              <InfoLabel text={selectedDog.ownerPhoneNumber} bgColor={chipNumberColor}/>
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
      <InfoLabel text={'Närvarande'} bgColor={isPresentColor}/>
    );
  } else {
    return (
      <InfoLabel text={'Frånvarande'} bgColor={isNotPresentColor}/>
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
    backgroundRepeat: "no-repeat"
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
          <InfoLabel text={convertToProperCase(sex)} bgColor={sexMaleColor}/>
        );
      case 'female':
        return (
          <InfoLabel text={convertToProperCase(sex)} bgColor={sexFemaleColor}/>
        );
      default:
        return (
          <InfoLabel text={'Not supplied'} bgColor={"#000000"}/>
        );
  };
}

export default MoreDogInfoContainer;

