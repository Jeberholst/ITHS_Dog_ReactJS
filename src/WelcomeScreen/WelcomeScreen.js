import { Button } from '@material-ui/core';
import React from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom';
import '../WelcomeScreen/WelcomeScreen.css'

const WelcomeScreen = () => {

  document.title = 'Iths Dog - Welcome'

  return (
      <React.Fragment>
        <div className='welcome-main-container'>
            <DelayedAnimWarning></DelayedAnimWarning>
            <DelayedWoffs></DelayedWoffs>
            <DelayedButton></DelayedButton>
        </div>
      </React.Fragment>
  );
}

const DelayedAnimWarning = () => {
    return(
  
        <React.Fragment>
            <div className="welcome-warning-container">
              <h1>Warning</h1>
              <h2>Beware of dogs</h2>
            </div>
        </React.Fragment>
    );
}

const DelayedWoffs = () => {
    
    return(
      <React.Fragment>
        <div className="woff-container">
          <DelayedWoffItem></DelayedWoffItem>
          <DelayedWoffItem></DelayedWoffItem>
          <DelayedWoffItem></DelayedWoffItem>
        </div>
      </React.Fragment>
    )
}

const DelayedWoffItem = () => {
    return(
      <React.Fragment>
          <p>Woff</p>
      </React.Fragment>
    )
}

const DelayedButton = () => {
    return(
      <React.Fragment>
        <div className="btn-container">
          <ButtonRenderRegistrar/> 
        </div>  
      </React.Fragment>
    );
}

const ButtonRenderRegistrar = withRouter(({ history }) => (
  <Button
    variant="contained" 
    color="secondary" 
    style={{marginTop: 40}} 
    type='button'
    onClick={() => { history.push('/register') }}>
      Go to register
  </Button>
))


export default WelcomeScreen