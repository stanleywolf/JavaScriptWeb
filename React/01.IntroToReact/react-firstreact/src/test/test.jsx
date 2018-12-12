import React, { Component } from 'react';

class InnerComponenet extends React.Component{
    render(){
        let message = 'out of me'
        let object = {
            name: 'Stancho',
            age:36
        }
        return <div className="red">
                Inner component {message}. 
                I am {object.name} {object.age} years old!
            </div>
    }
}

class HelloMessage extends React.Component{
    render(){
        //wrap 2 components
        //return <div><h1>Hello, world</h1><h2>Hello from react</h2></div>
        return <h1>Hello, world! {this.props.message}<InnerComponenet /></h1>
    }
}


export default HelloMessage

