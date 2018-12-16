import React, {Component} from 'react';

class RegisterForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            value: '',
            submitValue:'Submit',
            user:{
                username:'',
                password:''
            },
            error:''
        }
    }
    onInputChanged=(event) =>{
        let user = this.state.user

        let inputName = event.target.name;
        let inputValue = event.target.value;

        user[inputName] = inputValue;

        this.setState({user})
    }
    onFormSubmit = (event) =>{
        event.preventDefault()

        if(this.state.user.password.length < 6){
            this.setState({
                error:'Pass must be more than 6 symbols'
            })           
            return;
        }
        console.log(this.state.user)
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <div>{this.state.error}</div>
                UserName: 
                <input
                    type="text"
                    name="username"
                    value={this.state.user.username}
                    onChange={this.onInputChanged}
                /><br/>
                Password:
                <input
                    type="password"
                    name="password"
                    value={this.state.user.password}
                    onChange={this.onInputChanged}
                /><br/>
                <input
                    type="submit"
                    value={this.submitValue}
                />
            </form>
        )
    }
}
export default RegisterForm;