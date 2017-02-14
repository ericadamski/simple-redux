import React from 'react';
import moment from 'moment';

import { List } from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../../actions/forecast';

class Forecast extends React.Component {
    constructor(props) {
        super(props);

        this.renderCount = 0;
        this.forecast = new List();
    }

    shouldComponentUpdate(props) {
        const test = this.forecast.mergeDeep(props.forecast);

        if (test !== this.forecast) {
            this.forecast = test;

            return true;
        }

        return false;
    }

    componentDidMount() {
        this.props.requestForecast();
        setInterval(
            () => this.props.requestForecast(),
            moment.duration(1, 'minute').asMilliseconds()
        );
    }

    render() {
        const { forecast } = this.props;

        console.log(`Render count [forecast]: ${++this.renderCount}`);

        if (!forecast) return null;

        return (
            <div className="forecast">
                {
                    forecast.map((weather, index) => (
                        <div
                            className="forecast-day"
                            key={JSON.stringify(weather).substr(index)}
                        >
                            <span className={`icon w${weather.get('icon')}`} />
                            <div>
                                <p className="desc">{weather.get('condition')}</p>
                                <p className="temp">{weather.get('temp')}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

function mapStateToProps() {
    return state => ({ forecast: state.forecast })
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
