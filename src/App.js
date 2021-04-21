import logo from './dog.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registrar from './Registrar'
import WelcomeScreen from './WelcomeScreen';
import { ButtonGroup } from '@material-ui/core';
import { fakeFetchData } from './DataFetcher'

function App() {
  fakeFetchData()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>

      <div className={'app-content-button-bar'}>
          <ButtonGroup variant="contained" color="secondary" aria-label="contained secondary button group">
            {/* <Button onClick={RenderWelcomeScreen}>Welcome  Screen</Button> */}
            {/* <Button onClick={RenderRegistrar}>Registrar</Button> */}
            {/* <Button onClick={RenderListOfDogs}>List of dogs</Button> */}
          </ButtonGroup>    
        </div>
        <div id="app-content-view" className="App-content-view">
            <Router>
                <Switch>
                    <Route exact path="/" component={WelcomeScreen}/>
                    <Route exact path="/Registrar" component={Registrar}/>
                </Switch>
            </Router>
          </div>
          

      </body>

    </div>
  );
}

export default App;
