import { Button, Zoom } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom';
import '../WelcomeScreen/WelcomeScreen.css'

const WelcomeScreen = () => {

  document.title = 'Welcome Screen'

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

  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1000)
  }, [show])

  if (show) {
    return(
     
        <React.Fragment>
          <Zoom in={true}>
            <div className="welcome-warning-container">
              <h1>Warning</h1>
              <h2>Beware of dogs</h2>
            </div>
          </Zoom>
        </React.Fragment>
    
    )
  } else {
    return null
  }

}

const DelayedWoffs = () => {
    
    const [show, setShow] = useState(false)
    useEffect(() => {
        setTimeout(() => {
          setShow(true)
        }, 1500)
      }, [show])

      if (show) {
        return(
          <React.Fragment>
            <div className="woff-container">
              <DelayedWoffItem delay={250}></DelayedWoffItem>
              <DelayedWoffItem delay={500}></DelayedWoffItem>
              <DelayedWoffItem delay={750}></DelayedWoffItem>
            </div>
          </React.Fragment>
        )
      }
      else {
        return null
      }
}

const DelayedWoffItem = ({ delay }) => {

  const [show, setShow] = useState(false)

  useEffect( () => {
    setTimeout( () => {
      setShow(true)
    }, delay)
  }, [show, delay])

  if (show) {
    return(
      <React.Fragment>
            <Zoom in={true}>
              <p>Woff</p>
          </Zoom>  
      </React.Fragment>
    )
  }
  else {
    return null
  }

}

const DelayedButton = () => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 3500)
  }, [show])

  if (show) {
    return(
      <React.Fragment>
        <Zoom in={true}>
          <ButtonRenderRegistrar/> 
        </Zoom>
      </React.Fragment>
    )
  } else {
    return null
  }

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