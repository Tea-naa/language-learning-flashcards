import React from 'react';
import Wordcard from './wordcard.jsx';

export default class Cardscontainer extends React.Component {
  render() {
    const { words, deleteWord } = this.props;

    const cardList = words.map((word) => (
      <Wordcard front={word.front} back={word.back} key={word.front} deleteWord={deleteWord} />
    ));

    return <section className="cards-container">{cardList}</section>;
  }
}
