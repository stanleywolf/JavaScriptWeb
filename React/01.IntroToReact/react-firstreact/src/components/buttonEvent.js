import React, {Component} from 'react';

class ButtonEvent extends Component{
constructor(props){
    super(props)
    //2nd way to bind method or arrow function is 1st way
    this.onButtonClicked = this.onButtonClicked.bind(this);
}

    onButtonClicked = (event) =>{
        console.log(this.props.name)
        console.log(event.target)

        let value = event.target.value;

        this.setState({
            eventValue:value
        })
    }

    render(){
        return(
            <button onClick={this.onButtonClicked}>Click Me</button>
        )
    }
}

export default ButtonEvent;