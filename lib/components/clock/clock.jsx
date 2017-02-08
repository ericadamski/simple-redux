import React from 'react';

import * as actions from '../../actions/clock';

export class Clock extends React.Component {
    componentDidMount() {}

    render() {
        const { time } = this.props;

        return (
            <div className="clock">
                <div className="time">
                    {time}
                </div>
            </div>
        );
    }
}

export default Clock;
