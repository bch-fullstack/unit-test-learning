import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import React from 'react';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	render(){
		return (
			<div className="App">
			  <Form handleChange={this.handleChange}/>
			</div>
		  );
	}
}

export default App;
