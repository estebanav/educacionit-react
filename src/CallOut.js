import React from 'react';

export default class CallOut extends React.Component {
    render() {
        return ( <div className="callout alert">
            <p>{this.props.copy}</p>
        </div>)
    }
}

CallOut.propTypes = {
    copy: React.PropTypes.string.isRequired
};