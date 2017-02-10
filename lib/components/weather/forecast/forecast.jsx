import React from 'react';
import moment from 'moment';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../../actions/forecast';

class Forecast extends React.Component {
    constructor(props) {
        super(props);

        this.renderCount = 0;
    }

    componentDidMount() {
        this.props.requestForecast();
        setInterval(
            () => this.props.requestForecast(),
            moment.duration(2, 'minutes').asMilliseconds()
        );
    }

    render() {
        const { forecast } = this.props;

        console.log(`Render count [forecast]: ${this.renderCount++}`);

        if (!forecast) return null;

        return (
            <div className="forecast">
                {
                    forecast.map(weather => (
                        <div
                            className="forecast-day"
                            key={JSON.stringify(weather)}
                        >
                            <span className={`icon w${weather.icon}`} />
                            <div>
                                <p className="desc">{weather.condition}</p>
                                <p className="temp">{weather.temp}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

function mapStateToProps() {
    return state => {
        const { forecast } = state;

        return { ...forecast };
    };
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
