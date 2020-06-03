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
	editNote = (value, place) => {
	//console.log("coming here");
	const tempState= this.state;
	const tempNote = this.state.notes[place];
	tempNote.name = value;
	tempState.notes[place] = tempNote;
	this.setState({notes: tempState.notes});
	}
	deleteNote = (value, place) => {
	console.log("delete here");
	const tempState= this.state;
	const tempNote = this.state.notes[place];
	tempNote.name = value;
	tempState.notes[place] = tempNote;
	this.setState(prevstate =>{
		return {
			...prevstate,
			notes: prevstate.notes.filter(note => {
				return note.name !== tempNote.name;
        })
		}		
		});
	}
 	render() {
 		//console.log("State", this.state); //logging state to see state changes
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
								editNote = {this.editNote}
								deleteNote={this.deleteNote}
 							/>

 							)
 						)
 					}

 				</div>
				<div className="notes_display">
					{
 						this.state.notes.map(
 							(note, place)=> 
 							(<li
 								key = {place}>
 								{note.name}
							</li>
 							)
 						)						
					}
				</div>
 			</div>
 		);
 	}
}

export default Container;