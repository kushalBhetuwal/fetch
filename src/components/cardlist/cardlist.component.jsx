import { Component} from 'react';
import Image from "../image/image.jsx"
class Card extends Component {
  render(){
    const {kushal} = this.props;
    return(
      <>
      
       {kushal.map((monster)=>{
       return(
        <div>
        <Image id={monster.id}/>
        <h1>{monster.name}</h1>
        <p>{monster.email}</p>
        </div>
       
       ) 
       
       })}
      </>
    )
  }
}

export default Card;