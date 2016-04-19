import React from 'react';

export default class LoginCTA extends React.Component {
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