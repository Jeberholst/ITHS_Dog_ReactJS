import { Box, Button, Collapse, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { Component } from 'react';
import { dogDataRows, fetchAllData, createData, clearDogData, convertToProperCase } from './DataFetcher';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
// import male_black_24dp from './icons/male_black_24dp' ;
import WarningIcon from '@material-ui/icons/Warning';
import Pets from '@material-ui/icons/Pets';
import Phone from '@material-ui/icons/Phone';
import Face from '@material-ui/icons/Face';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import FetchedData from './DogFetchedData.json';
import ReactDOM from 'react-dom';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'none',
    },
  },
});


const cardStyle = {
  width: 400,
  height: "100%",
  padding: 5,
  paddingTop: 15,
  marginBottom: 5,
};


class DogInfo extends Component {
  render(){
    return (
        <React.Fragment>

               <h1>Dog information</h1>

               <Button variant="contained" color="primary" onClick={fakeFetchData}>Fetch data</Button>

               <div id="dog-info">Här kommer det synas</div>

        </React.Fragment>
  
    );
  }
}


const fakeFetchData = async () => {

  const fakeData = FetchedData
  clearDogData()
  console.log(fakeData)
  
  fakeData.forEach(props => {
                  
      dogDataRows.push(createData(
            props.name, 
            props.sex, 
            props.breed, 
            props.img, 
            props.present, 
            props.age, 
            props.chipNumber, 
            { 
              name: props.owner.name,
              lastName: props.owner.lastName,
              phoneNumber: props.owner.phoneNumber,
            },
      ));
    
  });
  
  const element = document.getElementById('dog-info')
  ReactDOM.render(CreateTable(), element)
}

const fetchAllDataa = async () => {

   // const result = await fetchAllData()
    // do something else here after fetchAllData completes
    console.log(dogDataRows)

     const divEle = document.getElementById("dog-info")

    // dogDataRows.forEach(props => {
    dogDataRows.forEach(props => {
      const newDog = document.createElement("p")
      newDog.textContent = props.name + "  " + props.sex

      divEle.appendChild(newDog)

    });

 
}

function DogRow(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>

        <TableCell component="th" scope="row" align="left" style={{ fontWeight: 'bold'}}>
          {row.name}
        </TableCell>
         <TableCell></TableCell>

        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)} >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
     
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              
              <Table size="small"  align="left" aria-label="purchases">
                <TableHead>
                  <TableRow>

                     {/* <TableCell>Date</TableCell> */}
                     {/* <TableCell>Date</TableCell> */}
      
            
                  </TableRow>
                </TableHead>
                <TableBody>

                  <AddRowWithIcon mKey={'Breed'} mValue={convertToProperCase(row.breed)} ic={'icon-pets'}/>
                  {/* <AddRow mKey={"Breed"} mValue={convertToProperCase(row.breed)}/> */}
                  <AddRow mKey={"Age"} mValue={row.age + ' år'}/>
                  <Gender sex={row.sex} />
                  <AddRow mKey={"Chip-Number"} mValue={row.chipNumber}/>
                  
                  {row.owner.map((owner) => (
                     <React.Fragment> 
                        <AddRowWithIcon mKey={'Owner'} mValue={owner.name + ' ' + owner.lastName} ic={'icon-face'}/>
                        <AddRowWithIcon mKey={'Phone-number'} mValue={owner.phoneNumber} ic={'icon-phone'}/>
                        {/* <AddRow mKey={"Owner"} mValue={owner.name + ' ' + owner.lastName}/> */}
                        {/* <AddRow mKey={"Phone-number"} mValue={owner.phoneNumber}/> */}

                     </React.Fragment>
                  ))}
                   
                  <LoadImage url={row.img}/>
             
                
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



function LoadImage(props){

  let image = props.url
  console.log(image);

  return(
      <TableRow component="tr" key={image}>
        <TableCell> 
          Sample-Image
        </TableCell>
        <TableCell> 
          <img src={image} alt="s" width={200} height={200}/>
        </TableCell>
      </TableRow>
  );  
}


function Gender(props){

  let gender = props.sex

  switch(String(gender)){
    case "male":
      return (
        <AddRowWithIcon mKey={'Gender'} mValue={gender} ic={'icon-dog-male'}/>
      )
    case "female":
      return (
        <AddRowWithIcon mKey={'Gender'} mValue={gender} ic={'icon-dog-female'}/>
      )
    default:
      return  <React.Fragment></React.Fragment>

  }

    
}

function AddRow(props){
  
  let propVal = props.mValue;

  return(
     <p>
      {propVal}  
    </p>
  );
}

function AddRowWithIcon(props){
  
  let propKey = props.mKey;
  let propVal = props.mValue;
  let propIcon = props.ic;

  return(
    <TableRow>
      <TableCell style={{borderBottom:"none"}}> 
        <SetIcon ic={propIcon}/>
        {propKey}
      </TableCell>
      <TableCell> 
          {propVal}  
      </TableCell>
    </TableRow> 
  );
}

function SetIcon(props){

  let icon = props.ic

  switch (String(icon)) {
      case "icon-face":
        return <Face/>
      case "icon-phone":
        return <Phone/>
      case "icon-dog-male":
        return <Pets/>
      case "icon-dog-female":
        return <Pets/>
      case "icon-pets":
            return <Pets/>
      case "icon-out-before-arrival":
          return <NaturePeopleIcon/>
      case "icon-gone-home":
          return <HomeIcon color='primary'/>
      default: 
          return <WarningIcon/>
  }
 
}

function Card(props) {
  // const { row } = props;

  return (
    <React.Fragment>

        <Container className='card-container' style={cardStyle} component={Paper}>
            <ImageContainer props={props}/>
            <InfoContainer props={props}/>
       </Container>
    </React.Fragment>
  );
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

function InfoContainer(props){

  const { row } = props.props;
  const dogInfo = convertToProperCase(row.breed) + ', ' + row.age + ' år, ' + row.sex 
  
  var dogOwnerInfo = ''
  row.owner.map((owner) => (
     dogOwnerInfo = convertToProperCase(owner.name) + ' ' + owner.lastName + ' - ' + owner.phoneNumber
  ))

  return (
    <React.Fragment>
        <div className="dog-name">
            {row.name}
          </div>

          <div className="dog-info">

              <AddRow mValue={dogInfo}/>
              <AddRow mValue={dogOwnerInfo}/>

          </div>

    </React.Fragment>
  );

      
}

function ImageContainer(props) {
  const { row } = props.props;

  const imageStyle = {
    width: "100%",
    height: 300,
    background: `url(${row.img})`,
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

export default DogInfo;