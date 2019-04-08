import React, {Component} from "react";
import "./MyHeader.css";

export default class extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: props.title || "Mon Application"
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({title : nextProps.title || this.state.title})
    }

    render(){
        return (
            <header className={this.props.className}>
                <span >{this.state.title}</span>
            </header>
        )
    }
}