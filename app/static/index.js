import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import * as ReactDOM from "react-dom";
import "../index.css"

import Login from "../component/login/Login";
import Home from "../component/home/Home";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <Router>
                <Route exact path="/" component={Login}/>
                <Route exact path="/home" component={Home}/>
            </Router>


        );
    }
}


ReactDOM.render(
    <App></App>,
    document.getElementById("root")
);
