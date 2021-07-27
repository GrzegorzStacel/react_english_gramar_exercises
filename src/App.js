import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from './components/context';
import stylesListItem from './components/ListWrapper/ListItem/ListItem.module.scss'
import Header from './components/Header/Header';
import PlaceView from './views/Prepositions/PlaceView/PlaceView';
import TimeView from './views/Prepositions/TimeView/TimeView';
import MainView from './views/Main/Main';
import {initialStateItemsPlace, initialStateItemsTime} from './data/Data';
  
class App extends React.Component {
  state = {
    itemsTime: [...this.getRandomQuestions(initialStateItemsTime)],
    itemsPlace: [...this.getRandomQuestions(initialStateItemsPlace)],
    isReset: false,
  }
  
  
  resetFn = (e) => {
    const collectionOfAnswerButtons = e.target.parentElement.children
    
    for (let i = 0; i < collectionOfAnswerButtons[2].children.length; i++) {
      for (let j = 0; j < collectionOfAnswerButtons[2].children[i].children[1].children.length; j++) {
        collectionOfAnswerButtons[2].children[i].children[1].children[j].className = stylesListItem.answer
      }
    }
    
    this.setState = ({
      isReset: true,
    })
    
    this.setStateAndUpdate();
    this.forceUpdate()
    
    // this.setState({
    //   isReset: false,
    // })
  }
    
  setStateAndUpdate() {
    console.log('this in app', this);
    this.setState = ({
      itemsTime: [...this.getRandomQuestions(initialStateItemsTime)],
      itemsPlace: [...this.getRandomQuestions(initialStateItemsPlace)]
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

  randomFN = (e) => {
    console.log('here app', this);
    this.setState = ({
      isReset: false,
    })
  }

  render() {
    const contextElements = {
      ...this.state,
      resetFn: this.resetFn,
      stylesResetButton: styles.resetBtn,
      randomFN: this.randomFN,
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
