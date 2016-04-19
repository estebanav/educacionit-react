import React from 'react';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
    render() {
        return ( <div className="medium-6 medium-centered large-4 large-centered columns">
            <div className="row">
                <LoginForm/>
            </div>
        </div>)
    }
}