import React from "react"
import Header from "./Header"
import "./index.css"
import Main from "./Main"

class App extends React.Component{

	render(){
		return 	<div className="header">
					<Header />
					<Main />
				</div>
	}
}

export default App