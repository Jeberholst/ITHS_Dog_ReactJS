import logo from './ImagesAndIcons/dog.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './Register/Register'
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import { fakeFetchData } from './DataFetcher';
import SingleSelectedDogContainer from './ComponentsMore/SingleSelectedDogContainer';

function App() {
  fakeFetchData()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>

        <div id="app-content-view" className="App-content-view">
          <Router>
              <Switch>
                  <Route exact path="/" component={WelcomeScreen}/>
                  <Route exact path="/register/" component={Register}/>
                  <Route exact path="/register/:dogname" component={SingleSelectedDogContainer}/>
              </Switch>
          </Router>
        </div>
          

      </body>

    </div>
  );
}

export default App;
