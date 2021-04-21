import React from 'react'
import { Container, Paper, Table, TableBody, TableCell, TableRow, Divider, Slide, RootRef } from '@material-ui/core';
import { dogDataRows, convertToProperCase } from './DataFetcher';
import CallButton from './CallButton';
import InfoLabel from './InfoLabel';
import MoreButtonNew from './MoreButtonNew'
import * as Colors from './ColorConstants'

const cardStyle = {
  display: 'tableCell',
  width: 300,
  height: 200,
  minWidth: 300,
  minHeight: 200,
  marginBottom: 5,
};

const tableStyle = {
   borderBottom: 'none',
}

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
  paddingTop: 10,
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
      <CreateTable></CreateTable>
    </React.Fragment>
  )
}

const CreateTable = () => {
  return (
    <React.Fragment>
      <Container className='card-grid-container'>
        {dogDataRows.map((row) => (
            <Card className='card-owner' key={row.name} row={row}/>
        ))}
      </Container>
    </React.Fragment>
  );
}

function Card(props) {
  return (
    <React.Fragment>
        <Container className='card-container' style={cardStyle} component={Paper}>
            <InfoContainer props={props}  />
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
      <div className="owner-info" >

        <Table style={tableStyle}>
          <TableBody>

          
            <TableRow style={trOwnerStyle}>
              {dogOwnerInfo}
            </TableRow>
            <Divider style={{marginTop: 10, marginBottom: 10}}></Divider>

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
                <InfoLabel text={convertToProperCase(row.breed)} bgColor={Colors.breedColor}/>
                <InfoLabel text={convertToProperCase(row.age)  + ' år'} bgColor={Colors.ageColor}/>
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

export default ButtonDisplayRegistrarData
