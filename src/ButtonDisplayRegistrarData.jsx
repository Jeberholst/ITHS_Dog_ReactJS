import React from 'react'
import { Button, Container, Paper, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { dogDataRows, convertToProperCase, selectedDog } from './DataFetcher';
import ReactDOM from 'react-dom';
import CallButton from './CallButton';
import MoreButton from './MoreButton';
import InfoLabel from './InfoLabel';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const breedColor = '#8EA4AA'
const ageColor = '#93A99E'
const sexMaleColor = '#74777C'
const sexFemaleColor = '#B299AD'

const cardStyle = {
  width: 300,
  height: "100%",
  padding: 20,
  marginBottom: 5,
};

const tcDogNameStyle = {
  display: 'inline',
  width: "100%",
  height: "100%",
  padding: 10,
  marginBottom: 15,
  background: "#ffffff",
  borderBottom: 'unset',
  fontSize: 18,
};

const tcDogInfoStyle = {
  display: 'inline',
  width: "100%",
  height: 'fit-content',
  fontSize: 12,
  padding: 5,
  marginBottom: 5,
  borderBottom: 'unset',
};

const trOwnerStyle = {
  width: '100%',
  height: "fit-content",
  fontSize: 22,
  fontStyle: 'italic',
};

const ButtonDisplayRegistrarData = () => {
  return (
    <Button variant="contained" color="primary" onClick={displayData}>Fetch registrar</Button>
  )
}

function displayData() {
  const element = document.getElementById('dog-info')
  ReactDOM.render((CreateTable()), element)
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
  return (
    <React.Fragment>
      <Container className='card-container' style={cardStyle} component={Paper}>
        <InfoContainer props={props} />
      </Container>
    </React.Fragment>
  );
}

function InfoContainer(props) {
  const { row } = props.props;

  var dogOwnerInfo = ''

  dogOwnerInfo = convertToProperCase(row.ownerName) + ' ' + row.ownerLastName

  return (
    <React.Fragment>
      <div className="owner-info">

        <Table>
          <TableBody>

            <TableRow style={trOwnerStyle}>
              {dogOwnerInfo}
            </TableRow>

            <TableRow style={trOwnerStyle}>
              <CallButton phoneNumber={row.ownerPhoneNumber}/>
              <MoreButton props={row} />
            </TableRow>
            
            <TableRow>
              <TableCell style={tcDogNameStyle}>
                {convertToProperCase(row.name)}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={tcDogInfoStyle}>
                <Gender sex={row.sex}/>
                <InfoLabel text={convertToProperCase(row.breed)} bgColor={breedColor}/>
                <InfoLabel text={convertToProperCase(row.age)  + ' år'} bgColor={ageColor}/>
              </TableCell>
            </TableRow>

          </TableBody>

        </Table>

      </div>

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

export default ButtonDisplayRegistrarData
