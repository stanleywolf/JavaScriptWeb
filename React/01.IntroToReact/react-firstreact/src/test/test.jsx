import React, { Component } from 'react';
import Welcome from '../components/welcome'
import Logo from '../components/logo';
import Button from '../components/button';

class InnerComponenet extends React.Component{
    render(){
        let message = 'out of me'
        let object = {
            name: 'Stancho',
            age:36
        }
        return <div className="red">
            <Logo /> <br/>
            <Button text="Click me"/> <br/>
                Inner component {message}. 
                I am {object.name} {object.age} years old!
                <Welcome title="React" subtitle="Eho" specificClass="green"/>
                <Welcome title="Sprint"/>
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

