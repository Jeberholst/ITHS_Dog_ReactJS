import React from 'react'
import { Container } from '@material-ui/core';
import { selectedDog, convertToProperCase, findByDogName } from '../DataFetcher';
import InfoLabel from '../InfoLabel';
import { useParams } from 'react-router-dom';

const cardStyle = {
  width: 400,
  height: 'fit-content',
  padding: 10,
  paddingTop: 15,
  marginBottom: 50,
  backgroundColor: 'white',
  borderRadius: 15,
};

const SingleSelectedDogContainer = () => {

    let params = useParams();
    let paramDogName = 'Lady';
    if ('dogname' in params) {
        paramDogName = params.dogname;
    }
    document.title = 'Register - ' + paramDogName

    findByDogName(paramDogName)
    console.log(selectedDog.name)

    if(selectedDog.name === undefined){
      return(
        <React.Fragment>
            <h1>Error, dog not found</h1>
        </React.Fragment>
      )
    }else {
      return(
        <React.Fragment>
          <CreateContainer></CreateContainer>
        </React.Fragment>
      )
  
    }
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
              <InfoLabel text={convertToProperCase(selectedDog.breed)}/>
              <InfoLabel text={convertToProperCase(selectedDog.age)  + ' år'}/>
              <Gender sex={selectedDog.sex}/>
              <IsPresent present={selectedDog.present}/>
          </div>

          <div className='info-container-row'>
              <InfoLabel text={selectedDog.chipNumber}/>
              <InfoLabel text={dogOwnerInfo}/>
              <InfoLabel text={selectedDog.ownerPhoneNumber}/>
          </div>
      </div>

    </React.Fragment>
  );

}

function IsPresent(props) {
  const isPresent = props.present

  if(isPresent){
    return (
      <InfoLabel text={'Närvarande'}/>
    );
  } else {
    return (
      <InfoLabel text={'Frånvarande'}/>
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
          <InfoLabel text={convertToProperCase(sex)}/>
        );
      case 'female':
        return (
          <InfoLabel text={convertToProperCase(sex)}/>
        );
      default:
        return (
          <InfoLabel text={'Not supplied'}/>
        );
  };
}

export default SingleSelectedDogContainer;

