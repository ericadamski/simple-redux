import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTime, updateTime } from '../../actions/clock';
import { getTodaysDate } from '../../actions/date';

export class Clock extends React.Component {
    constructor(props) {
        super(props);

        // this.renderCount = 0;
    }

    componentDidMount() {
        this.props.getTime();
        setInterval(() => {
            this.props.getTodaysDate();
            this.props.updateTime();
        }, 500);
    }

    render() {
        const {
            time,
            date,
        } = this.props;

        // console.log(`Render count [clock.jsx]: ${++this.renderCount}`);

        return (
            <div className="clock">
                <h1>{ date || 'Clock' }</h1>
                <div className="time">
                    {time}
                </div>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return state => {
        const {
            clock,
            date,
        } = state;

        return {
            time: clock.get('time'),
            date: date.get('date'),
        };
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getTime,
        getTodaysDate,
        updateTime,
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
