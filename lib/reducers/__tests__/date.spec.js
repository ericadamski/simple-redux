import { expect } from 'chai';

import { TYPES } from '../../actions/date';
import { date } from '../date';

describe('date reducer', () => {
    it('should contain the date', () => {
        // Arrange
        const action = {
            type: TYPES.GET_DATE,
            date: 'a proper date',
        };

        // Act
        const result = date(undefined, action);

        // Assert
        expect(result.toJS()).to.have.all.keys(['date']);
    });
});
