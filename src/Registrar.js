import React, { Component } from 'react';
import ButtonDisplayRegistrarData from './ButtonDisplayRegistrarData';

class Registrar extends Component {
  render(){
    return (
        <React.Fragment>

               <h1>Registrar</h1>
               <ButtonDisplayRegistrarData/>
               <div className="class-dog-info" id="dog-info"/>

        </React.Fragment>
  
    );
  }
}

export default Registrar;