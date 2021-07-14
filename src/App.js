import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "./App.css"
import {robots} from "./robots";
class App extends Component {
    constructor(){
        super();
        this.state={
            robots:robots,
            searchField:""
        }
    }
    onSearchChange=(event)=>{
        this.setState( {searchField: event.target.value})
        console.log("event", event.target.value);
    }
    render(){
        const filteredRobots= this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        }

        )
        return(
            <div className="tc">
                <h1 className="f2" >Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
    } 
}
export default App;