import React, {Component} from 'react';
import * as ReactDOM from "react-dom";
import "../index.css";

import {HashRouter as Router, Route} from 'react-router-dom';
import DynamicImport from "./DynamicImport";

const Login = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "login" */'../component/login/Login')}>
        {(Component) => Component === null
            ? <p>Loading</p>
            : <Component {...props} />}
    </DynamicImport>
);

const Home = (props) => (
    <DynamicImport load={() => import(/* webpackChunkName: "home" */'../component/home/Home')}>
        {(Component) => Component === null
            ? <p>Loading</p>
            : <Component {...props} />}
    </DynamicImport>
)

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
