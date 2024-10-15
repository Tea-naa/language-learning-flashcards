import React from 'react';
import './wordform.css';

class WordForm extends React.Component {
  frontRef = React.createRef();
  backRef = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    const enField = this.frontRef.current;
    const deField = this.backRef.current;

    const enValue = enField.value;
    const deValue = deField.value;

    enField.value = '';
    deField.value = '';

    this.props.addWord(enValue, deValue);
  };

  render() {
    return (
      <section className="card-form">
        <h2>New Card</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label>
              English:
              <input type="text" name="en" id="english" ref={this.frontRef} required />
            </label>
          </div>
          <div className="form-row">
            <label>
              German:
              <input type="text" name="de" id="german" ref={this.backRef} required />
            </label>
          </div>
          <div className="form-row">
            <button type="submit">Add Word</button>
          </div>
        </form>
      </section>
    );
  }
}

export default WordForm;
