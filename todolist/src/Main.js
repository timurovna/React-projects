import React from "react"

class Main extends React.Component{
	constructor(){
		super()
		this.state = {
			text: "",
			todos: [],
			done: false
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.deleteItem = this.deleteItem.bind(this)
		this.markItem = this.markItem.bind(this)
	}

	handleChange(event){
		this.setState({
			text: event.target.value
		})
	}


	handleClick(event){
		const newArray = this.state.todos
		const listItem = this.state.text
		newArray.push({
			todoText: listItem,
			done: false
		})
		this.setState({
			todos: newArray,
			text: "",
			done: false
		})
	}

	deleteItem(event){

		const newArr = this.state.todos
		const deleted = newArr.splice(event.target.name, 1)
		this.setState({
			todos: newArr
		})
	}
	markItem(event){
		const newArr = this.state.todos
		const indx = event.target.getAttribute("data-index")
		newArr[indx].done = true

		this.setState({
			todos: newArr
		})
		
	}

	render(){
		const uls = []
		for (let i = 0; i < this.state.todos.length; i++) {
			uls.push(<div className={this.state.todos[i].done===true ? "item done" : "item"}>
						<li data-index={i} onClick={this.markItem}>{this.state.todos[i].todoText}</li>
						<button name={i} onClick={this.deleteItem}>X</button>
					</div>)
		}
		return  <div>
					<input onChange={this.handleChange} value={this.state.text} />
					<button className="add" onClick={this.handleClick}>Add</button>
					<div className="list">
						<ul>
							{uls}
						</ul>
					</div>
				</div>
	}
}


export default Main