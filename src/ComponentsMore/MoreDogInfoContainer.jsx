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

      <div className='info-container'>
          <div className='info-container-row'>
              <InfoLabel text={convertToProperCase(selectedDog.breed)} bgColor={breedColor}/>
              <InfoLabel text={convertToProperCase(selectedDog.age)  + ' år'} bgColor={ageColor}/>
              <Gender sex={selectedDog.sex}/>
              <IsPresent present={selectedDog.present}/>
          </div>

          <div className='info-container-row'>
              <InfoLabel text={selectedDog.chipNumber} bgColor={chipNumberColor}/>
              <InfoLabel text={dogOwnerInfo} bgColor={chipNumberColor}/>
              <InfoLabel text={selectedDog.ownerPhoneNumber} bgColor={chipNumberColor}/>
          </div>
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
  return (
    <React.Fragment>
        <img className={'more-info-dialog-img'} src={selectedDog.img} alt={'dog'}/>
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

