import { Component} from 'react'; 

class Image extends Component {
    render(){
        const {id} = this.props;
        return ( 
            <>
             <img src = {`https://robohash.org/${id}?set = set2&size=180x180 `} alt = "nameofimage" />

            </>
        )
    }
}

export default Image;