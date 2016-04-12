var React = require('react');
var ReactDOM = require('react-dom');

class LoginForm extends React.Component {
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

class CheckboxEl extends React.Component {
    render() {
        return (
            <div>
                <input id="show-password" type="checkbox"/><label for="show-password">{this.props.labelCopy}</label>
            </div>
        );
    }
};

CheckboxEl.propTypes = {
    labelCopy: React.PropTypes.string.isRequired
};

class LoginCTA extends React.Component {
    render() {
        const textCentred = (this.props.isTextCentred) ? 'text-center': '';
        const showAsButton = (this.props.isButton) ? 'button expanded': '';
        return (
        <p className={textCentred}>
            <a href="#" className={showAsButton}>{this.props.copy}</a>
        </p>
        );
    }
};

LoginCTA.propTypes = {
    isTextCentred: React.PropTypes.bool,
    isButton: React.PropTypes.bool,
    href: React.PropTypes.string,
    copy: React.PropTypes.string.isRequired
};

LoginCTA.defaultProps = {
    isButton: false,
    isTextCentred: false,
    href: '#'
};

class LoginTitle extends React.Component {
    render() {
        return (
            <h4 className="text-center">{this.props.title}</h4>
        );
    }
};

LoginTitle.propTypes = {
    title: React.PropTypes.string.isRequired
};

class InputFieldEl extends React.Component {
    constructor() {
        let inError = false;
        super();
        this. _handleChangeEmail = this. _handleChangeEmail.bind(this);
        this.state = {inError};
    }

    isValidEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    _handleChangeEmail(event) {
        const elValue = event.target.value;
        const inError = !this.isValidEmail(elValue);
        this.setState({inError});
    }

    render() {
        let inputEl = (<input type={this.props.type} placeholder={this.props.placeholder}/>),
            errorEl = null;
        if(this.props.type==='email'){
            inputEl = (<input type={this.props.type} placeholder={this.props.placeholder} onChange={this._handleChangeEmail}/>);
        }
        if(this.state.inError){
            errorEl = (<CallOut copy="Error: The Email is not valid"/>);
        }

        return (
            <label>{this.props.label}
                {inputEl}
                {errorEl}
            </label>
        );
    }
};

InputFieldEl.propTypes = {
    label: React.PropTypes.string,
    placehoder: React.PropTypes.string,
    type: React.PropTypes.string.isRequired
};

class CallOut extends React.Component {
    render() {
        return ( <div className="callout alert">
            <p>{this.props.copy}</p>
        </div>)
    }
}

CallOut.propTypes = {
    copy: React.PropTypes.string.isRequired
};

class Login extends React.Component {
    render() {
        return ( <div className="medium-6 medium-centered large-4 large-centered columns">
            <div className="row">
                <LoginForm/>
            </div>
        </div>)
    }
}

ReactDOM.render(
    <Login/>,
    document.getElementById('body')
);
