import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from './components/context';
import stylesListItem from './components/ListWrapper/ListItem/ListItem.module.scss'
import Header from './components/Header/Header';
import PlaceView from './views/Prepositions/PlaceView/PlaceView';
import TimeView from './views/Prepositions/TimeView/TimeView';
import MainView from './views/Main/Main';

// const initialStateItems = {
//   PrzyimkiCzasu: [
//     {
//       question: 'Time: Shall we go to the cinema ... Sunday?',
//       answer: 'on',
//     }, {
//       question: 'Time: He graduated from Oxford ... 1985.',
//       answer: 'in',
//     }, {
//       question: 'Time: I must get up early ... the morning.',
//       answer: 'in',
//     }, {
//       question: 'The shops open ... nine.',
//       answer: 'at',
//     }, {
//       question: 'She has never seen the sea ... winter.',
//       answer: 'in',
//     }, {
//       question: 'I am going to meet her ... Wednesday.',
//       answer: 'on',
//     },
//   ],
//   PrzyimkiMiejsca: [
//     {
//       question: 'Miejsca1',
//       answer: 'in',
//     }, {
//       question: 'Miejsca2',
//       answer: 'on',
//     }, {
//       question: 'Miejsca3',
//       answer: 'on',
//     }, {
//       question: 'Miejsca4',
//       answer: 'on',
//     }, {
//       question: 'Miejsca5',
//       answer: 'on',
//     },
//   ]
// }

const initialStateItems = [
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
      question: 'The shops open ... nine.',
      answer: 'at',
    }, {
      question: 'She has never seen the sea ... winter.',
      answer: 'in',
    }, {
      question: 'I am going to meet her ... Wednesday.',
      answer: 'on',
    },
  ]
  
class App extends React.Component {
  state = {
    // items: [...this.getRandomQuestions({ ...initialStateItems })],
    // items: [...this.getRandomQuestions(initialStateItems.PrzyimkiCzasu)],
    // items: [initialStateItems.PrzyimkiCzasu]
    items: [...this.getRandomQuestions(initialStateItems)],
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
    // const wartosci = Object.values(initialStateItems)

    // for (let i = 0; i < wartosci.length; i++) {
    //   this.getRandomQuestions(wartosci[i])
    // }

    this.setState({
      // items: [...this.initialStateItems]
      items: [...this.getRandomQuestions(initialStateItems)]
    })
  
    return initialStateItems
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
      resetFn: this.resetFn
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
