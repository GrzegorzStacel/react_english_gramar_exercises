import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Button from './components/Button/Button';
import stylesListItem from './components/ListWrapper/ListItem/ListItem.module.scss'
import Header from './components/Header/Header';

const initialStateItems = [
  {
    question: 'Shall we go to the cinema ... Sunday?',
    answer: 'on',
  }, {
    question: 'He graduated from Oxford ... 1985.',
    answer: 'in',
  }, {
    question: 'I must get up early ... the morning.',
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
    items: [...this.getRandomQuestions(initialStateItems)],
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
  
  resetFN = (e) => {
    const collectionOfAnswerButtons = e.target.parentElement.children

    for (let i = 0; i < collectionOfAnswerButtons[2].children.length; i++) {
      for (let j = 0; j < collectionOfAnswerButtons[2].children[i].children[1].children.length; j++){
        collectionOfAnswerButtons[2].children[i].children[1].children[j].className = stylesListItem.answer
      }
    }

    this.setStateAndUpdate();
  }
  
  setStateAndUpdate() {
    this.setState({
      items: [...this.getRandomQuestions(initialStateItems)]
    })
  
    this.forceUpdate()
  }
  
  render() {    
    return (
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />
          <ListWrapper
            items={this.state.items}
            />
          <Button
            setClassName={styles.resetBtn}    
            handleOnClick={(e) => this.resetFN(e)}
              >
              reset
          </Button>
        </div>
      </BrowserRouter>
    )
  };
}

export default App;
