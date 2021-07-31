import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import AppContext from './components/context';
import Header from './components/Header/Header';
import PlaceView from './views/Prepositions/PlaceView/PlaceView';
import TimeView from './views/Prepositions/TimeView/TimeView';
import MainView from './views/Main/Main';
import {initialStateItemsPlace, initialStateItemsTime} from './data/Data';
  
class App extends React.Component {
  state = {
    itemsTime: [...this.getRandomQuestions(initialStateItemsTime)],
    itemsPlace: [...this.getRandomQuestions(initialStateItemsPlace)],
  }

  setStateAndUpdate = () => {
    this.setState({
      itemsTime: [...this.getRandomQuestions(initialStateItemsTime)],
      itemsPlace: [...this.getRandomQuestions(initialStateItemsPlace)],
    })
  }
  
  getRandomQuestions(array) {
    var i = array.length,
    j = 0,
    temp;
    
    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    
    return array;
  }

  render() {
    const contextElements = {
      ...this.state,
      setStateAndUpdate: this.setStateAndUpdate,
    }

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <div className={styles.wrapper}>
            <Header />
            <Route exact path='/' component={MainView} />
            <Route path='/miejsca' component={PlaceView} />
            <Route path='/czasu' component={TimeView} />
          </div>
        </AppContext.Provider>
      </BrowserRouter>
    )
  };
}

export default App;
