import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Container, Paper } from '@material-ui/core';
import { selectedDog, convertToProperCase } from './DataFetcher';

const cardStyle = {
    width: 400,
    height: "100%",
    padding: 5,
    paddingTop: 15,
    marginBottom: 5,
  };
  
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));


const MoreInfoDialog = ({ open, handleClose, Transition }) => {

  console.log('Open dialog value: ' + open)

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        
        <AppBar className={useStyles.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            
            <Typography variant="h6" className={useStyles.title}>
              Title
            </Typography>
            
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>

          </Toolbar>
        </AppBar>

        <CreateContainer></CreateContainer>

      </Dialog>
    </div>
  );
}


function AddRow(props){
  
    let propVal = props.mValue;
  
    return(
       <p>
        {propVal}  
      </p>
    );
  }
  
  function CreateContainer() {
  
    return (
      <React.Fragment>
          <Container className='card-container' style={cardStyle} component={Paper}>
              <ImageContainer/>
              <InfoContainer/>
         </Container>
      </React.Fragment>
    );
  }
  
  function InfoContainer(){
  
    const dogInfo = convertToProperCase(selectedDog.props.breed) + ', ' + selectedDog.props.age + ' år, ' + selectedDog.props.sex 
    const dogOwnerInfo = convertToProperCase(selectedDog.props.ownerName) + ', ' + convertToProperCase(selectedDog.props.ownerLastName)
  
    return (
      <React.Fragment>
          <div className="dog-name">
              {selectedDog.name}
            </div>
  
            <div className="dog-info">
  
                <AddRow mValue={dogInfo}/>
                <AddRow mValue={dogOwnerInfo}/>
                
            </div>
  
      </React.Fragment>
    );
  
        
  }
  
  function ImageContainer() {
  
    const imageStyle = {
      width: "100%",
      height: 300,
      backgroundImage: `url(${selectedDog.props.img})`,
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

  export default MoreInfoDialog;