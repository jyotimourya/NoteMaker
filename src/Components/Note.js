import React from "react";

class Note extends React.Component {
  render() {
    console.log("props", this.props);
    return <div>{this.props.name}</div>;
  }
}
export default Note;
