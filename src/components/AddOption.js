import React from "react";

export default class AddOption extends React.Component {
  state = { error: undefined };
  onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.addOption(option);
    if (!error) e.target.elements.option.value = "";
    this.setState((prevState) => ({ error }));
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option__error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.onFormSubmit}>
          <input
            className="add-option__input"
            type="text"
            placeholder="Enter an option"
            name="option"
          ></input>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
