import React from 'react';


export default class LoginTitle extends React.Component {
    render() {
        return (
            <h4 className="text-center">{this.props.title}</h4>
        );
    }
};

LoginTitle.propTypes = {
    title: React.PropTypes.string.isRequired
};