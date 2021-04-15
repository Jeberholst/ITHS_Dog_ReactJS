import React from 'react'
import { Button, ButtonGroup, Container, Paper, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { dogDataRows, fakeFetchData, convertToProperCase } from './DataFetcher';
import ReactDOM from 'react-dom';
import FetchButton from './MoreButton';
import CallButton from './CallButton';
import MoreButton from './MoreButton';

const cardStyle = {
  width: 400,
  height: "100%",
  padding: 5,
  paddingTop: 5,
  marginBottom: 5,
};

const tableCellStyle = {
  root: {
    '& *': {
      borderBottom: 'unset',
    },
  },
  width: "50%",
  height: "100%",
  padding: 5,
  paddingTop: 5,
  marginBottom: 5,
  background: "#ffffff",
  borderBottom: 'unset',
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

function createOwnerData(name, lastName, phoneNumber){
  return {
    name,
    lastName,
    phoneNumber,
  };
}

function InfoContainer(props) {
  const { row } = props.props;

  const dogBasicInfo = convertToProperCase(row.name) + ', ' + convertToProperCase(row.breed) + ', ' + row.age + ' år, ' + convertToProperCase(row.sex)

  var dogOwnerInfo = ''
  var ownerData = createOwnerData()

  row.owner.map((owner) => (
    dogOwnerInfo = convertToProperCase(owner.name) + ' ' + owner.lastName + ' - ' + owner.phoneNumber,
    ownerData = createOwnerData(owner.name, owner.lastName, owner.phoneNumber)
  ))

  return (
    <React.Fragment>
      <div className="owner-info">

        <Table>
          <TableBody>

            <TableRow>
              <TableCell style={tableCellStyle} align="right">
                  <CallButton phoneNumber={ownerData.phoneNumber}/>
                  <MoreButton />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={tableCellStyle} align="left">
                {dogOwnerInfo}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={tableCellStyle} align="left">
                {dogBasicInfo}
              </TableCell>
            </TableRow>

          </TableBody>

        </Table>

      </div>

    </React.Fragment>
  );

}

export default ButtonDisplayRegistrarData
