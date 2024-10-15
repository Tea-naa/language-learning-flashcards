import React, { Component } from 'react';
import './wordcard.css';

export default class Wordcard extends Component {
  state = {
    isFront: true,
  }

  handleFlip = () => {
    this.setState({ isFront: !this.state.isFront });
  }

  handleDelete = (event) => {
    event.preventDefault();
    event.stopPropagation();  // Prevents the flip event from triggering
    this.props.deleteWord(this.props.front);
  }

  render() {
    const cardContent = this.state.isFront
      ? <div className="card-front">English: {this.props.front}</div>
      : <div className="card-back">German: {this.props.back}</div>;

    return (
      <div className="word-card" onClick={this.handleFlip}>
        <span className="delete-card" onClick={this.handleDelete}>X</span>
        {cardContent}
      </div>
    );
  }
}
