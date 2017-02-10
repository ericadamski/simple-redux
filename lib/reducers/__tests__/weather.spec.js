import { expect } from 'chai';

import { TYPES } from '../../actions/weather';
import { weather } from '../weather';

describe('weather reducer', () => {
    it('should return a non empty state', () => {
        // Arrange
        const action = {
            type: TYPES.GET_WEATHER,
            weather: { test: true },
        };

        // Act
        const result = weather(undefined, action);

        // Assert
        expect(result.toJS()).to.not.be.empty;
    });

    it('should return a the correct state', () => {
        // Arrange
        const action = {
            type: TYPES.GET_WEATHER,
            weather: { test: true },
        };

        // Act
        const result = weather(undefined, action);

        // Assert
        expect(result.toJS()).to.have.all.keys(['test']);
    });
});
