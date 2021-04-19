import React from 'react'
import { Button, Container, Paper, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { dogDataRows, convertToProperCase } from './DataFetcher';
import ReactDOM from 'react-dom';
import CallButton from './CallButton';
import InfoLabel from './InfoLabel';
import MoreButtonNew from './MoreButtonNew'

const breedColor = '#8EA4AA'
const ageColor = '#93A99E'
const sexMaleColor = '#74777C'
const sexFemaleColor = '#B299AD'

const cardStyle = {
  display: 'tableCell',
  width: 300,
  height: 200,
  minWidth: 300,
  minHeight: 200,
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

const trActionStyle = {
  display: 'inline',
  width: '100%',
  height: "fit-content",
};

const ButtonDisplayRegistrarData = () => {
  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={displayData}>Fetch registrar</Button>
    </React.Fragment>
  )
}

function displayData() {
  const element = document.getElementById('dog-info')
  ReactDOM.render((CreateTable()), element)
}

function CreateTable() {
  return (
    <React.Fragment>
      <Container className='card-grid-container'>
        {dogDataRows.map((row) => (
            <Card key={row.name} row={row} />
        ))}
      </Container>
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

            <TableRow style={trActionStyle}>
              <CallButton phoneNumber={row.ownerPhoneNumber}/>
              <MoreButtonNew dialogData={row} />  
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
