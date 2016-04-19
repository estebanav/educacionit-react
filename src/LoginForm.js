import React from 'react';
import LoginTitle from './LoginTitle';
import LoginCTA from './LoginCTA';
import CheckboxEl from './CheckboxEl';
import InputFieldEl from './InputFieldEl';

export default class LoginForm extends React.Component {
    obtainInputs(){
        const inputEls = [
            {
                label: 'Email',
                type: 'email',
                placeholder: 'somebody@example.com',
                key: 'ie-' + Math.random()
            },
            {
                label: 'Password',
                type: 'password',
                placeholder: 'Password',
                key: 'ie-' + Math.random()
            }
        ];

        return inputEls.map(function(obj){
            return (<InputFieldEl {...obj}/>);
        });
    }

    render() {
        return (
            <form>
            <div className="row column log-in-form">
            <LoginTitle title="Log in with you email account"/>
            {this.obtainInputs()}
            <CheckboxEl labelCopy="Show Password"/>
            <LoginCTA isTextCentred={false} isButton={true} copy="Log In"/>
            <LoginCTA isTextCentred={true} isButton={false} copy="Forgot your password?"/>
            </div>
            </form>
    );
    }
};