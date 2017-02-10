import { expect } from 'chai';
import { Map } from 'immutable';

import { action as createAction } from '../../actions/utils';
import { TYPES } from '../../actions/clock';
import { clock } from '../clock';

describe('clock reducer', () => {
    it('should update the state with GET_TIME type', () => {
        // Arrange
        const data = new Map({ time: 'this is a test' });
        const action = createAction(TYPES.GET_TIME, data);

        // Act
        const result = clock(undefined, action);

        // Assert
        expect(result).to.deep.equal(data);
    });

    it('should update the state with UPDATE_TIME type', () => {
        // Arrange
        const data = new Map({ time: 'this is a test' });
        const action = createAction(TYPES.UPDATE_TIME, data);

        // Act
        const result = clock(undefined, action);

        // Assert
        expect(result).to.deep.equal(data);
    });
});
