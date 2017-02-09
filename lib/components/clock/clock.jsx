import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTime, updateTime } from '../../actions/clock';
import { getTodaysDate } from '../../actions/date';

export class Clock extends React.Component {
    componentDidMount() {
        this.props.getTime();
        this.props.getTodaysDate();
        setInterval(() => this.props.updateTime(), 500);
    }

    render() {
        const {
            time,
            date,
        } = this.props;

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
            ...clock,
            ...date,
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
