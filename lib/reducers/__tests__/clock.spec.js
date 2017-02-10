import { expect } from 'chai';

import { TYPES } from '../../actions/clock';
import { clock } from '../clock';

describe('clock reducer', () => {
    it('should update the state with GET_TIME type', () => {
        // Arrange
        const action = {
            type: TYPES.GET_TIME,
            time: 'this is a test',
        };

        // Act
        const result = clock(undefined, action);

        // Assert
        expect(result.toJS()).to.deep.equal({ time: action.time });
    });

    it('should update the state with UPDATE_TIME type', () => {
        // Arrange
        const action = {
            type: TYPES.UPDATE_TIME,
            time: 'this is a test',
        };

        // Act
        const result = clock(undefined, action);

        // Assert
        expect(result.toJS()).to.deep.equal({ time: action.time });
    });
});
