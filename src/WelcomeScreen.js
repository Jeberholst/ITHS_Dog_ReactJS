import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import Registrar from './Registrar'
import ReactDOM from 'react-dom'

class WelcomeScreen extends Component {
  render(){
    return (
        <React.Fragment>

               <h1>Welcome to...</h1>
               <Button onClick={RenderRegistrar}>Registrar</Button>

        </React.Fragment>
  
    );
  }
}

function RenderRegistrar() {
  const root = document.getElementById('app-content-view')
  document.title = 'Owner registrar'
  ReactDOM.render(<Registrar/>, root)
}


export default WelcomeScreen;