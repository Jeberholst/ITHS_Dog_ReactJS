import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Registrar from './Registrar'
import DogInfo from './DogInfo';
import WelcomeScreen from './WelcomeScreen';
import { Button, ButtonGroup } from '@material-ui/core';
import ReactDOM from 'react-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <ButtonGroup variant="contained" color="secondary" aria-label="contained secondary button group">
            <Button onClick={RenderWelcomeScreen}>Welcome  Screen</Button>
            <Button onClick={RenderRegistrar}>Registrar</Button>
            <Button onClick={RenderListOfDogs}>List of dogs</Button>
          </ButtonGroup>    
        </div>
        <div id="app-content-view" className="App-content-view">
            <Router>
                <Switch>
                    <Route exact path="/" component={WelcomeScreen}/>
                    <Route exact path="/Registrar" component={Registrar}/>
                    <Route exact path="/DogInfo" component={DogInfo}/>
                </Switch>
            </Router>
          </div>
          


      </header>
    </div>
  );
}

function RenderWelcomeScreen() {
  const root = document.getElementById('app-content-view')
  ReactDOM.render(<WelcomeScreen/>, root)
}

function RenderRegistrar() {
  const root = document.getElementById('app-content-view')
  ReactDOM.render(<Registrar/>, root)
}

function RenderListOfDogs() {
  const root = document.getElementById('app-content-view')
  ReactDOM.render(<DogInfo/>, root)
}


export default App;
