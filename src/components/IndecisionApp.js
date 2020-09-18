import React from "react";

import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = { options: [], selectedOption: undefined };

  handleDeleteAllOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleRemoveOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove),
    }));
  };
  handlePick = () => {
    const rand = Math.floor(Math.random() * this.state.options.length);
    let option = this.state.options[rand];
    // alert(this.state.options[rand]);
    this.setState((prevState) => ({ selectedOption: option }));
  };
  handleAddOption = (option) => {
    if (!option) return "Enter a valid option";
    else if (this.state.options.indexOf(option) > -1)
      return "Option already exists";

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };
  handleModalClose = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) this.setState(() => ({ options }));
    } catch (error) {
      // Do nothing
    }
  }
  componentDidUpdate(prevPops, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of your computer!";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            handleAction={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              removeOption={this.handleRemoveOption}
              removeAllOptions={this.handleDeleteAllOptions}
              options={this.state.options}
            />
            <AddOption addOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleModalClose={this.handleModalClose}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};

export default IndecisionApp;
