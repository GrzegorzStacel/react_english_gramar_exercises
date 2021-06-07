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
    items: [...initialStateItems]
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
