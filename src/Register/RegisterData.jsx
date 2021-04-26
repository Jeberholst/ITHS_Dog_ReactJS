import React from 'react'
import { Container, Paper, Table, TableBody, TableCell, TableRow, Divider } from '@material-ui/core';
import { dogDataRows, convertToProperCase } from '../DataFetcher';
import CallButton from '../Register/CallButton';
import InfoLabel from '../InfoLabel';
import MoreButton from '../ComponentsMore/MoreButton'
import * as Colors from '../ColorConstants'
import '../Register/Register.css'

const tableStyle = {
   borderBottom: 'none',
}

const trOwnerStyle = {
  width: '100%',
  height: "fit-content",
  paddingTop: 10,
  fontSize: 22,
  fontStyle: 'italic',
};

const RegisterData = () => {
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
        <Container className='register-data-card-container' component={Paper}>
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

            <TableRow style={trOwnerStyle}>
              {dogOwnerInfo}
            </TableRow>
            <Divider style={{marginTop: 10, marginBottom: 10}}></Divider>

            <TableRow className='ic-action'>
              <CallButton phoneNumber={row.ownerPhoneNumber}/>
              <MoreButton dialogData={row} />  
            </TableRow>
            
            <TableRow className='main-dog-name-tr'>
              <TableCell>
                {convertToProperCase(row.name)}
              </TableCell>
            </TableRow>

            <TableRow className='main-dog-info-tr'>
              <TableCell>
                <Gender sex={row.sex}/>
                <InfoLabel text={convertToProperCase(row.breed)}/>
                <InfoLabel text={convertToProperCase(row.age)  + ' år'}/>
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

export default RegisterData
