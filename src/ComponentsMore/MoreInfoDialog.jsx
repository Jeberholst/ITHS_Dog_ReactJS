import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { AppBar, DialogContent, Slide, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { selectedDog } from '../DataFetcher';
import MoreDogInfoContainer from './MoreDogInfoContainer';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    marginBottom: 15,
    backgroundColor: '#282c34'
  },
  title: {
    marginLeft: theme.spacing(0),
    flex: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MoreInfoDialog = ({ openDialog, closeDialog }) => {
    
  const classes = useStyles();

  return (
    <div> 
        <Dialog onClose={closeDialog()} aria-labelledby="customized-dialog-title" open={openDialog} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
               <Toolbar>
          
                 <Typography variant="h6" className={classes.title}>
                   {selectedDog.name}              
                 </Typography>

                 <IconButton edge="end" color="inherit" onClick={closeDialog()} aria-label="close">
                  <CloseIcon />
                 </IconButton>

               </Toolbar> 
             </AppBar>

           <DialogContent>
             <MoreDogInfoContainer></MoreDogInfoContainer>
           </DialogContent>

    
        </Dialog>

    </div>
  );
}

export default MoreInfoDialog;