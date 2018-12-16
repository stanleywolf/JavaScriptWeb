import React, {Component} from 'react';

class Button extends Component{

    constructor(props){
        super(props)

        this.state={
            count: 0
        }
    }

    render(){
        return(
            <button>
                {this.props.text} - Clicked {this.state.count} times!
            </button>
        )
    }
}

export default Button;