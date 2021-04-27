import logo from './ImagesAndIcons/dog.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './Register/Register'
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import { setDogRowData, fetchAllData, dogDataRows } from './DataFetcher';
import SingleSelectedDogContainer from './ComponentsMore/SingleSelectedDogContainer';
import { useState } from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

// HashRouter

const progressBarStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));


function App() {

  const [loaded, setHasLoaded] = useState(false)

  const setLoaded = () => {
    setHasLoaded(true)
  }

  if (typeof(Storage) !== "undefined") {
    const storedRows = sessionStorage.getItem('DogDataRows')

    if(storedRows !== null){
      if (storedRows.length !== 0){
        console.log('Data retrieved, array NOT empty')
        setDogRowData()
        setTimeout(() => {
          setLoaded(true)
        }, [200])
      }
    } else {
      console.log('Fetching data, array empty')
      fetchAllData()
      setTimeout(() => {
        setLoaded(true)
      }, [1000])
    }

  } else {
    console.log('Browser not supporting sessionStorage')
    fetchAllData()
    setTimeout(() => {
      setLoaded(true)
    }, [1000])
  }

  if(loaded){
    return ( <Content></Content> )
  } else {
    return ( <Loader></Loader> )
  }

}

const Loader = () => {
  return(
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div id="app-content-view" className="App-content-view">
        <div className={progressBarStyle().root}>
          <CircularProgress color="secondary" />
        </div>
      </div>

    </div>
  );
}

const Content = () => {
  return(
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div id="app-content-view" className="App-content-view">
      <Router>
          <Switch>
              <Route exact path="/" component={WelcomeScreen}/>
              <Route exact path="/register/" component={Register}/>
              <Route exact path="/register/:dogname" component={SingleSelectedDogContainer}/>
          </Switch>
      </Router>
    </div>
  </div>
  );
}

export default App;
