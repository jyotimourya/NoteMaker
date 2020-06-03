import React from "react";

class AddNotes extends React.Component {
  state = {
    name: ""
  };

  handleChange = e => {
    const name = e.target.value; // getting value from input element
    this.setState({ name: name }); // one way to set state
  };

  handleSubmit = e => {
    //function to handle form submit
    e.preventDefault(); //to prevent page from reloading/refreshing
    const note = {
      //creating new object to return to the parent
      name: this.state.name
    };
    this.props.addNote(note); //using this.props to return value
    this.setState({ name: "" });
  };
  render() {
    //console.log("props", this.props.addNote);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Add your task"
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <button type="submit"> Add </button>
        </form>
      </div>
    );
  }
}
export default AddNotes;
