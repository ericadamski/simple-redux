import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/weather';

export class Weather extends React.Component {
    componentDidMount() {
        this.props.getWeather();
    }

    render() {
        const { data } = this.props;

        console.log(data);

        return <h1>{data.toString()}</h1>;
    }
}

function mapStateToProps() {
    return state => ({ data: state.weather });
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
