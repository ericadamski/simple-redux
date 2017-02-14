import { expect } from 'chai';
import * as actions from '../clock';

describe('clock actions', () => {
    it('get time should return a string', () => {
        // Arrange

        // Act
        const result = actions.getTime();

        // Assert
        expect(result).to.have.all.keys(['type', 'time']);
        expect(result.type).to.equal(actions.TYPES.GET_TIME);
        expect(result.time).to.be.a('string');
    });

    it('update time should return a string', () => {
        // Arrange

        // Act
        const result = actions.updateTime();

        // Assert
        expect(result).to.have.all.keys(['type', 'time']);
        expect(result.type).to.equal(actions.TYPES.UPDATE_TIME);
        expect(result.time).to.be.a('string');
    });
});
