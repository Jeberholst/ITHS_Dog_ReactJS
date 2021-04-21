import { Button, Zoom } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Registrar from './Registrar'
import ReactDOM from 'react-dom'

const WelcomeScreen = () => {

  return (
      <React.Fragment>

              <h1>Welcome</h1>
              <h2>Now loading...</h2>
              <DelayedAnimWarning></DelayedAnimWarning>
              <DelayedAnimWoff></DelayedAnimWoff>
              <DelayedButton></DelayedButton>

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
            <div>
              <h1>Warning</h1>
              <h2>Beware of dogs!</h2>
            </div>
          </Zoom>
        </React.Fragment>
    
    )
  } else {
    return null
  }

}

const DelayedAnimWoff = () => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1500)
  }, [show])

  if (show) {
    return(
      <React.Fragment>
        <div style={{display: 'inline', width: 200}}>
            <Zoom in={true}>
              <h1>Woff</h1>
            </Zoom>
            <DelayedAnimWoffSecond></DelayedAnimWoffSecond>
            <DelayedAnimWoffThird></DelayedAnimWoffThird>
          
         </div>
      </React.Fragment>
    )
  }
  else {
    return null
  }
}

const DelayedAnimWoffSecond = () => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 250)
  }, [show])

  if (show) {
    return(
      <React.Fragment>
            <Zoom in={true}>
              <h1>Woff</h1>
            </Zoom>  
      </React.Fragment>
    )
  }
  else {
    return null
  }
}

const DelayedAnimWoffThird = () => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 500)
  }, [show])

  if (show) {
    return(
      <React.Fragment>
          <Zoom in={true}>
            <h1>Woff</h1>
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
          <Button variant="contained" color="secondary" onClick={RenderRegistrar}>Go to register</Button>
        </Zoom>
      </React.Fragment>
    )
  } else {
    return null
  }

}


function RenderRegistrar() {

  const root = document.getElementById('app-content-view')
  document.title = 'Owner registrar'
  ReactDOM.render(<Registrar/>, root)

}


export default WelcomeScreen;