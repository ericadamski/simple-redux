import { expect } from 'chai';
import { Map } from 'immutable';

import { action as createAction } from '../../actions/utils';
import { TYPES } from '../../actions/weather';
import { weather } from '../weather';

describe('weather reducer', () => {
    it('should return a non empty state', () => {
        // Arrange
        const data = new Map({ weather: { test: true } });
        const action = createAction(TYPES.GET_WEATHER, data);

        // Act
        const result = weather(undefined, action);

        // Assert
        expect(result.toJS()).to.not.be.empty;
    });

    it('should return a the correct state', () => {
        // Arrange
        const data = new Map({ weather: { test: true } });
        const action = createAction(TYPES.GET_WEATHER, data);

        // Act
        const result = weather(undefined, action);

        // Assert
        expect(result.toJS()).to.have.deep.property('weather.test', true);
    });
});
