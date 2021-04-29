import React from "react"

class MemeGenerator extends React.Component{

	constructor(){
		super()
		this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImages: []
        }
	}
	componentDidMount(){
		fetch("https://api.imgflip.com/get_memes")
		.then(response=>response.json())
		.then(response=>{
			const {memes} = response.data
			this.setState({allMemeImages: memes})
		})
		this.changeHandler = this.changeHandler.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	changeHandler(event){
		const name = event.target.name
		const value = event.target.value

		this.setState({
			[name]: value
		})

	}
	handleClick(event){
		event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImages.length)
        console.log(randNum)
        const randMemeImg = this.state.allMemeImages[randNum].url
        this.setState({ randomImg: randMemeImg })
	}

	render(){

		return  <div>
					<form className="meme-form" onSubmit={this.handleClick}>
						<input type="text" 
							name="topText" 
							placeholder="Top Text" 
							value={this.state.topText} 
							onChange={this.changeHandler}/><br />
						<input type="text" 
							name="bottomText" 
							placeholder="Bottom Text" 
							value={this.state.bottomText} 
							onChange={this.changeHandler}/><br />
						<button>Generate</button>
					</form>
					<div className="meme">
                    	<img src={this.state.randomImg} alt="" />
                    	<h2 className="top">{this.state.topText}</h2>
                    	<h2 className="bottom">{this.state.bottomText}</h2>
                	</div>
		 		</div>

		 		
	}
}

export default MemeGenerator