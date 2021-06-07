import React from 'react';
import styles from './App.module.scss';
import ListWrapper from './components/ListWrapper/ListWrapper';

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
  
  render() {    
    return (   
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
            Uzupełnij odpowiednimi przyimkami czasu in/on/at
        </h2>
        <ListWrapper
          items={this.state.items}
        />
      </div>
    )
  };
}

export default App;
