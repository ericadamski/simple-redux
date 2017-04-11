import { expect } from 'chai';
import { Map } from 'immutable';

import { action as createAction } from '../../actions/utils';
import { TYPES } from '../../actions/clock';
import { clock } from '../clock';

describe('clock reducer', () => {
    it('should update the state with GET_TIME_SUCCESS type', () => {
        // Arrange
        const data = new Map({ time: 'this is a test' });
        const action = createAction(TYPES.GET_TIME_SUCCESS, data);

        // Act
        const result = clock(undefined, action);

        // Assert
        expect(result).to.deep.equal(data);
    });
});
