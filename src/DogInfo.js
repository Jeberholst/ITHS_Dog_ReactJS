import { Box, Button, Collapse, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { Component } from 'react';
import { dogDataRows, fetchAllData, createData, clearDogData } from './DataFetcher';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FetchedData from './DogFetchedData.json';
import ReactDOM from 'react-dom';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'none',
    },
  },
});

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
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
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

                  <AddRow mKey={"Breed"} mValue={row.breed}/>
                  <AddRow mKey={"Chip-Number"} mValue={row.chipNumber}/>
                  
                  {row.owner.map((owner) => (
                     <React.Fragment> 

                        <AddRow mKey={"Owner"} mValue={owner.name + ' ' + owner.lastName}/>
                        <AddRow mKey={"Phone-number"} mValue={owner.phoneNumber}/>

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

function AddRow(props){
  
  let propKey = props.mKey;
  let propVal = props.mValue;

  return(
  
      <TableRow component="tr" align="left">
        <TableCell style={{width: 125}}> 
          {propKey}   
        </TableCell>
        <TableCell> 
          {propVal}  
        </TableCell>
      </TableRow>

  );
}

function CreateTable() {
  return (
    <TableContainer className='t-container' component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {dogDataRows.map((row) => (
            <DogRow key={row.breed} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DogInfo;