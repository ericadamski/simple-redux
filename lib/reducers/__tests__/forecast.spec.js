import { expect } from 'chai';

import { TYPES } from '../../actions/forecast';
import { forecast } from '../forecast';

describe('forecast reducer', () => {
    it('should return a non empty state', () => {
        // Arrange
        const state = {};
        const action = {
            type: TYPES.GET_FORECAST_SUCCESS,
            forecast: { test: true },
        };

        // Act
        const result = forecast(state, action);

        // Assert
        expect(result).to.not.be.empty;
    });

    it('should return a the correct state', () => {
        // Arrange
        const state = {};
        const action = {
            type: TYPES.GET_FORECAST_SUCCESS,
            forecast: { test: true },
        };

        // Act
        const result = forecast(state, action);

        // Assert
        expect(result).to.have.all.keys(['forecast']);
        expect(result).to.have.deep.property('forecast.test', true);
    });
});
