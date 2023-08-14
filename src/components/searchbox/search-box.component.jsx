import { Component} from 'react';

class Searchbox extends Component {

    render(){
        const {onchangehandler} = this.props;
        return(
            <input className='searchbox' type ="search" placeholder = 'search' onChange ={onchangehandler}/>
        )
    }
}

export default Searchbox;