import React from 'react';
import AddNotes from './AddNotes';
import Note from './Note';

class Container extends React.Component {
	state={
		notes:[]
	}
	addNote = note => {
		//console.log("note", note);
		this.setState(prevstate => { //second way to update state
			let a = [...prevstate.notes]; //shallow copy of ur state
			a.push(note); // pushing new object into ur duplicate array
			return{       //doing state update
				notes: a  //syntax for updating state
			};
		});
	}
 	render() {
 		console.log("State", this.state); //logging state to see state changes
 		return(
 			<div className="parent_container">
 				<h1>Note Maker</h1>
 				<AddNotes addNote = {this.addNote} />
 				<div className="notes_container">
 					{
 						this.state.notes.map(
 							(note, place)=> 
 							(<Note
 								key = {place}
 								name = {note.name}
 								place = {place}
 							/>
 							)
 						)
 					}
 				</div>
 			</div>
 		);
 	}
}

export default Container;