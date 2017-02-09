import React from 'react';

import moment from 'moment';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/weather';

export class Weather extends React.Component {
    componentDidMount() {
        this.props.requestWeather();
        setInterval(() => this.props.requestWeather(), moment.duration(10, 'minutes').asMilliseconds());
    }

    render() {
        const { data } = this.props;

        return (
            <div className="weather">
                <div className={`icon w${data.icon}`} />
                <div>
                    <h4>{ data.condition }</h4>
                    <h2>{ data.temp }</h2>
                </div>
            </div>
        );
    }
}

function mapStateToProps() {
    return state => ({ data: state.weather });
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
