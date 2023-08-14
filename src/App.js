import { Component } from "react";
import "./App.css";
import Card from './components/cardlist/cardlist.component.jsx'
import Searchbox from "./components/searchbox/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      input: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => {
        this.setState({ monsters: user });
      })
      .catch((error) => console.log(error));
  }
  
  onsearchange =(event)=>{
    const input = event.target.value.toLowerCase();
    this.setState({input});
  }

  render() {
    const {onsearchange} = this;
    const {monsters, input} = this.state;
    const filter = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(input);
    })
    return (
      <>
      <Searchbox onchangehandler ={onsearchange}/>
        <Card kushal ={filter} />


       </>
    );
  }
}
export default App;
