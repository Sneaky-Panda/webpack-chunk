import React, {Component} from 'react';
import * as ReactDOM from "react-dom";
import "../../../index.css"
import Home from "../../component/home/Home";

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
            <Home/>
        );
    }
}




ReactDOM.render(
    <App></App>,
    document.getElementById("root")
);
