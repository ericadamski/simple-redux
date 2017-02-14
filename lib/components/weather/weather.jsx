import React from 'react';
import moment from 'moment';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/weather';
import { weatherSelector } from '../../selectors/forecast';
import { Forecast } from './forecast';

export class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.renderCount = 0;
    }

    componentDidMount() {
        this.props.requestWeather();
        setInterval(
            () => this.props.requestWeather(),
            moment.duration(1, 'minute').asMilliseconds()
        );
    }

    render() {
        const { data } = this.props;

        console.log(`Render count [weather.jsx]: ${++this.renderCount}`);

        return (
            <div>
                <div className="weather">
                    <div className={`icon w${data.get('icon')}`} />
                    <div>
                        <h4>{ data.get('condition') }</h4>
                        <h2>{ data.get('temp') }</h2>
                    </div>
                </div>
                <Forecast />
            </div>
        );
    }
}

function mapStateToProps() {
    return state => ({ data: weatherSelector(state) });
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
