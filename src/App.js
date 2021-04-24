import logo from './ImagesAndIcons/dog.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './Register/Register'
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import { fakeFetchData, setDogRowData, fetchAllData } from './DataFetcher';
import SingleSelectedDogContainer from './ComponentsMore/SingleSelectedDogContainer';

function App() {
  // fakeFetchData()

  if (typeof(Storage) !== "undefined") {
    const storedRows = sessionStorage.getItem('DogDataRows')

    if(storedRows !== null){
      if (storedRows.length !== 0){
        console.log('Data retrieved, array NOT empty')
        console.log(storedRows)
        setDogRowData(JSON.parse(storedRows))
      }
    } else {
      console.log('Fetching data, array empty')
      fakeFetchData()
    }

  } else {
    console.log('Browser not supporting sessionStorage')
    fakeFetchData()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <body> */}

        <div id="app-content-view" className="App-content-view">
          <Router>
              <Switch>s
                  <Route exact path="/" component={WelcomeScreen}/>
                  <Route exact path="/register/" component={Register}/>
                  <Route exact path="/register/:dogname" component={SingleSelectedDogContainer}/>
              </Switch>
          </Router>
        </div>
          
      {/* </body> */}

    </div>
  );
}

export default App;
