import { expect } from 'chai';
import { Map } from 'immutable';

import { action as createAction } from '../../actions/utils';
import { TYPES } from '../../actions/date';
import { date } from '../date';

describe('date reducer', () => {
    it('should contain the date', () => {
        // Arrange
        const data = new Map({ date: 'a proper date' });
        const action = createAction(TYPES.GET_DATE, data);

        // Act
        const result = date(undefined, action);

        // Assert
        expect(result).to.deep.equal(data);
    });
});
