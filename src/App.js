import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from './components/context';
import stylesListItem from './components/ListWrapper/ListItem/ListItem.module.scss'
import Header from './components/Header/Header';
import PlaceView from './views/Prepositions/PlaceView/PlaceView';
import TimeView from './views/Prepositions/TimeView/TimeView';
import MainView from './views/Main/Main';

const initialStateItemsTime = [
    {
      question: 'Time: Shall we go to the cinema ... Sunday?',
      answer: 'on',
    }, {
      question: 'Time: He graduated from Oxford ... 1985.',
      answer: 'in',
    }, {
      question: 'Time: I must get up early ... the morning.',
      answer: 'in',
    }, {
      question: 'Time:The shops open ... nine.',
      answer: 'at',
    }, {
      question: 'Time:She has never seen the sea ... winter.',
      answer: 'in',
    }, {
      question: 'Time:I am going to meet her ... Wednesday.',
      answer: 'on',
    },
]

const initialStateItemsPlace = [
    {
      question: 'Place: Shall we go to the cinema ... Sunday?',
      answer: 'on',
    }, {
      question: 'Place: He graduated from Oxford ... 1985.',
      answer: 'in',
    }, {
      question: 'Place: I must get up early ... the morning.',
      answer: 'in',
    }, {
      question: 'Place:The shops open ... nine.',
      answer: 'at',
    }, {
      question: 'Place:She has never seen the sea ... winter.',
      answer: 'in',
    }, {
      question: 'Place:I am going to meet her ... Wednesday.',
      answer: 'on',
    },
  ]
  
class App extends React.Component {
  state = {
    itemsTime: [...this.getRandomQuestions(initialStateItemsTime)],
    itemsPlace: [...this.getRandomQuestions(initialStateItemsPlace)],
  }
  
  
  resetFn = (e) => {
      const collectionOfAnswerButtons = e.target.parentElement.children
      
      for (let i = 0; i < collectionOfAnswerButtons[2].children.length; i++) {
        for (let j = 0; j < collectionOfAnswerButtons[2].children[i].children[1].children.length; j++){
          collectionOfAnswerButtons[2].children[i].children[1].children[j].className = stylesListItem.answer
        }
      }
      
      this.setStateAndUpdate();
      this.forceUpdate()
    }
    
    setStateAndUpdate() {
    this.setState({
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

  render() {
    const contextElements = {
      ...this.state,
      resetFn: this.resetFn,
      stylesResetButton: styles.resetBtn
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
