import { expect } from 'chai';

import { TYPES } from '../../actions/date';
import { date } from '../date';

describe('date reducer', () => {
    it('should contain the date', () => {
        // Arrange
        const state = {};
        const action = {
            type: TYPES.GET_DATE,
            date: 'a proper date',
        };

        // Act
        const result = date(state, action);

        // Assert
        expect(result).to.have.all.keys(['date']);
    });
});
