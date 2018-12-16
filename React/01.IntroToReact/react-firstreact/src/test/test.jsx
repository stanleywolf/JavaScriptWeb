import React, { Component } from 'react';
import Welcome from '../components/welcome'
import Logo from '../components/logo';
import Button from '../components/button';
import Timer from '../components/timer';
import ButtonEvent from '../components/buttonEvent';
import RegisterForm from '../components/registerForm';

class InnerComponenet extends Component{
    render(){
        let message = 'out of me'
        let object = {
            name: 'Stancho',
            age:36
        }
        return <div className="red">
            <RegisterForm />
            <Logo /> <br/>
            <Button text="Click me"/> <br/>
                Inner component {message}. I am {object.name} {object.age} years old!
                <Welcome title="React" subtitle="Eho" specificClass="green"/>
                <Welcome title="Sprint"/>
                <Timer />
            </div>
    }
}

class HelloMessage extends Component{
    render(){
        //wrap 2 components
        //return <div><h1>Hello, world</h1><h2>Hello from react</h2></div>
        return (
            <div>
                <h1>Hello, world! {this.props.message}<InnerComponenet /></h1>
                <ButtonEvent name="Random Button"/>
            </div>
        )
    }
}


export default HelloMessage

