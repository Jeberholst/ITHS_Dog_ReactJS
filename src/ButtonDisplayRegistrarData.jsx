import React from 'react'
import { Button, Container, Dialog, Paper, Slide, Table, TableBody, TableCell, TableRow, IconButton } from '@material-ui/core';
import { dogDataRows, convertToProperCase, setData } from './DataFetcher';
import ReactDOM from 'react-dom';
import CallButton from './CallButton';
// import MoreButton from './MoreButton';
import InfoLabel from './InfoLabel';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ContainerMoreDogInfoOriginal from './ContainerMoreDogInfoOriginal';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

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
        <Card key={row.name} row={row} />
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    marginBottom: 50,
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
}));


const MoreButton = (props) => {

  // const [name, function] = useState(startState);
  // const [] = useEffect();

  // console.log(selectedDog)
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (boolean) => {
    
      if(boolean !== open){
        setData(props)
        setOpen(true);
     }
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return(
      <React.Fragment>

        <Button
          className={classes.button} variant="contained" color="secondary" size="small"
          onClick={() => handleClickOpen(true)}
          startIcon={<MoreHorizOutlinedIcon/>}
        >
          More
        </Button>

          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
                
                <Typography variant="h6" className={classes.title}>
                  Title
                </Typography>

              </Toolbar>
            </AppBar>

            <ContainerMoreDogInfoOriginal></ContainerMoreDogInfoOriginal>

          </Dialog>
         {/* <MoreInfoDialog fullScreen open={open} onClose={() => handleClose} TransitionComponent={Transition}></MoreInfoDialog> */}

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
