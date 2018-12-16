import React, {Component} from 'react';

class Timer extends Component{
constructor(props){
    super(props)

    this.state ={
        date: new Date()
    }
}
    componentDidMount(){
        
        this.timer = setInterval(
            () => this.tick(),1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }
    tick(){
        this.setState({
            date: new Date()
        })
    }
    render(){
        return (
        <span>
            Time is: {this.state.date.toLocaleTimeString()}
        </span>
        )
    }
}
export default Timer;