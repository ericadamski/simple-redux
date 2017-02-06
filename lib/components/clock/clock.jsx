import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/clock';

import './clock.scss';

class Clock extends React.Component {
    componentDidMount() {
        this.props.getTime();
        setInterval(() => this.props.updateTime(), 500);
    }

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

const mapStateToProps = () => {
    return state => {
        const { clock } = state;

        return { ...clock };
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
