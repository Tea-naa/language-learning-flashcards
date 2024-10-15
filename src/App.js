import React from 'react';
import WordForm from './wordform.jsx';
import Cardscontainer from './cardscontainer.jsx';
import './App.css';

class App extends React.Component {
  state = {
    words: [],
  }

  componentDidMount() {
    fetch(`${process.env.PUBLIC_URL}/words.json`)
      .then((data) => data.json())
      .then((data) => this.setState({ words: data }));
  }

  addWord = (front, back) => {
    const newWords = [...this.state.words, { front, back }];
    this.setState({ words: newWords });
  }

  deleteWord = (front) => {
    const newWords = this.state.words.filter((word) => word.front !== front);
    this.setState({ words: newWords });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        Language Learning Flashcards
        </header>
        <p className="App-description">
          A fun and interactive flashcard app designed to help users learn new words and enhance their vocabulary. Create, view, and delete flashcards easily!
        </p>
        <main>
          <WordForm addWord={this.addWord} />
          <Cardscontainer words={this.state.words} deleteWord={this.deleteWord} />
        </main>
      </div>
    );
  }
}

export default App;
