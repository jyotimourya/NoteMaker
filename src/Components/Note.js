import React from "react";

class Note extends React.Component {
  	state={
		name:''
	};

	handleChange = e => {
		//console.log("Changing");
		const name = e.target.value;
		this.setState({name}); //update the note if there is any 
		                       //change in the note
	}
	
	componentDidMount() { //set the value coming from props to the state
		this.setState({   //to display the note text initially
			name: this.props.name, 
		});
	}
	
  render() {
		const { name } = this.state;
		const { editNote, place } = this.props;
		//console.log(this.state);
		return(
			<div>
				<input
					type="text"
					value={name}
					onChange={this.handleChange}
					onBlur={() => editNote(name,place)}
				/>
				<button>X</button>
			</div>
		);
	}
}
export default Note;
