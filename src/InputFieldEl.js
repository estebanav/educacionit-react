import React from 'react';
import CallOut from './CallOut';

export default class InputFieldEl extends React.Component {
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