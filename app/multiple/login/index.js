import React, {Component} from 'react';
import * as ReactDOM from "react-dom";
import "../../../index.css"
import "../../component/login/login.css";
import Login from "../../component/login/Login";
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    componentDidMount() {
    }

    handleSubmit(){
        window.location.href = "http://localhost:8080/home.html";
    };

    render() {
        return (
            <Login handleSubmit={this.handleSubmit}/>

        );
    }
}




ReactDOM.render(
    <App></App>,
    document.getElementById("root")
);
