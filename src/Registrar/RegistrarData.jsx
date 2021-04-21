import React from 'react'
import { Container, Paper, Table, TableBody, TableCell, TableRow, Divider } from '@material-ui/core';
import { dogDataRows, convertToProperCase } from '../DataFetcher';
import CallButton from '../Registrar/CallButton';
import InfoLabel from '../InfoLabel';
import MoreButton from '../ComponentsMore/MoreButton'
import * as Colors from '../ColorConstants'
import './Register.css'

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

const RegistrarData = () => {
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
      <div className="owner-info">

        <Table style={tableStyle}>
          <TableBody>

            <TableRow className="ic-owner">
              {dogOwnerInfo}
            </TableRow>
            <Divider style={{marginTop: 10, marginBottom: 10}}></Divider>

            <TableRow className="ic-action">
              <CallButton phoneNumber={row.ownerPhoneNumber}/>
              <MoreButton dialogData={row} />  
            </TableRow>
            
            <TableRow className="ic-dog-name">
              <TableCell>
                {convertToProperCase(row.name)}
              </TableCell>
            </TableRow>

            <TableRow className="ic-dog-info">
              <TableCell>
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
          <InfoLabel 
            text={convertToProperCase(sex)} 
            bgColor={Colors.sexMaleColor}
          />
        );
      case 'female':
        return (
          <InfoLabel 
            text={convertToProperCase(sex)} 
            bgColor={Colors.sexFemaleColor}
          />
        );
      default:
        return (
          <InfoLabel 
            text={'Not supplied'} 
            bgColor={"#000000"}
          />
        );
  };
}

export default RegistrarData
