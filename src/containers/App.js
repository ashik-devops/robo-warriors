import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
class App extends Component {
    constructor(){
        super();
        this.state={
            robots:[],
            searchField:""
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json()).then(users=>  this.setState({robots: users}))
    }
    
    onSearchChange=(event)=>{
        this.setState( {searchField: event.target.value})
        console.log("event", event.target.value);
    }
    render(){
        const filteredRobots= this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())})
        
            return !filteredRobots.length ?
            <div className="tc">
                    <h1 className="f2" >Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <h1>Loading</h1>
                    </Scroll>
                </div>:
            (
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