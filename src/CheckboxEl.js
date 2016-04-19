import React from 'react';

export default class CheckboxEl extends React.Component {
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