import { Component} from 'react';
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters:[]
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(user=>this.setState(()=>{
      return {monsters:user}
    }, ()=>{
      console.log(this.state.monsters)
    }))
  }
  render(){
    return(
      <>
        {this.state.monsters.map((monster)=>{
          return <h1 key = {monster.id}>{monster.name}, {monster.id}, {monster.email}</h1>
        })}
      </>
    )
  }
}

export default App; 