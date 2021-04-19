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

const trActionStyle = {
  display: 'inline',
  width: '100%',
  height: "fit-content",
};

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     position: 'relative',
//     marginBottom: 15,
//     backgroundColor: '#282c34'
//   },
//   title: {
//     marginLeft: theme.spacing(0),
//     flex: 1,
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

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

// const MoreButton = (props) => {

//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const [currentDogName, setDogName] = React.useState('Title');

//   const handleClickOpen = (boolean) => {
    
//       if(boolean !== open){
//         setData(props)
//         setOpen(true);
//      }
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleDogName = (name) => {
//     setDogName(name);
//   };

//   return(
//       <React.Fragment>

//         <IconButton 
//           color="inherit" 
//           onClick={ function() {
//               handleClickOpen(true)
//               handleDogName(props.props.name)
//             }
//           }
//           >
//           <MoreHorizOutlinedIcon/>
//         </IconButton>

//         <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
//         <AppBar className={classes.appBar}>
//               <Toolbar>
          
//                 <Typography variant="h6" className={classes.title}>
//                   {currentDogName}
//                 </Typography>

//                 <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
//                   <CloseIcon />
//                 </IconButton>

//               </Toolbar>
//             </AppBar>


//           <DialogContent>
//            
//           </DialogContent>

    
//       </Dialog>

//       </React.Fragment>

//   );

// }

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
