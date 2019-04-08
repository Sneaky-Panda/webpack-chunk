import React, {Component} from 'react';
import "./login.css";


import MyHeader from "../header/MyHeader";

class Login extends Component {




    handleLocalSubmit(){
        this.props.history.push('/home')
    };

    render() {
        let handleSubmit = this.props.handleSubmit || this.handleLocalSubmit;
        return (
            <div className="login-form">
                <MyHeader/>
                <main>
                    <form >
                        <label>Login</label>
                        <input type="email"/>
                        <label>Password</label>
                        <input type="password"/>
                        <button onClick={handleSubmit.bind(this)} type={"button"}>Connexion</button>
                    </form>
                </main>
            </div>
        )
    }
}

export default Login;
