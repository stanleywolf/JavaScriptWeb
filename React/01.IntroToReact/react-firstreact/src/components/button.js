import React, {Component} from 'react';

class Button extends Component{

    constructor(props){
        super(props)

        //alawys bing this for  event(onClick)
        this.buttonClick = this.buttonClick.bind(this);
        //state give us to change something inside
        this.state={
            count: 0,
            isOn:true
        }
    }

    componentDidMount(){
        console.log('Render')
    }

    buttonClick(){
        //state change only with setState!!!!!
        this.setState(prevState =>({
            count: prevState.count + 1,
            isOn:!prevState.isOn
        }))
    }
    render(){
        return(
            <button onClick={this.buttonClick}>
                {this.props.text} - Clicked {this.state.count} times!
                {this.state.isOn? 'ON' : 'OFF'}
            </button>
        )
    }
}
export default Button;