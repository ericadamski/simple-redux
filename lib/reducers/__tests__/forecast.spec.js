import { expect } from 'chai';
import { Map, List } from 'immutable';

import { action as createAction } from '../../actions/utils';
import { TYPES } from '../../actions/forecast';
import { forecast } from '../forecast';

describe('forecast reducer', () => {
    it('should return a non empty state', () => {
        // Arrange
        const data = new Map({ forecast: new List() });
        const action = createAction(TYPES.GET_FORECAST_SUCCESS, data);

        // Act
        const result = forecast(undefined, action);

        // Assert
        expect(result.toJS()).to.be.empty;
    });

    it('should return a the correct state', () => {
        // Arrange
        const data = new Map({ forecast: new List() });
        const action = createAction(TYPES.GET_FORECAST_SUCCESS, data);

        // Act
        const result = forecast(undefined, action);

        // Assert
        expect(result).to.be.instanceof(List);
    });
});
