import React,{Component} from 'react';
import './welcome.css'

class Welcome extends Component{
    render(){
        let title = this.props.title || 'Title';
        let subtitle = this.props.subtitle || 'Subtitle';
        let specificClass = 'Welcome-'+(this.props.specificClass || 'default')
        return (
            <div className={specificClass}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        )
    }
}

export default Welcome

