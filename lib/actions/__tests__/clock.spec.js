import { expect } from 'chai';
import { Map } from 'immutable';
import * as actions from '../clock';

describe('clock actions', () => {
    it('get time should return a string', () => {
        // Arrange

        // Act
        const result = actions.getTime();

        // Assert
        expect(result).to.have.all.keys(['type', 'data']);
        expect(result.data).to.be.instanceof(Map);
        expect(result.data.toJS()).to.have.all.keys(['time']);
        expect(result.type).to.equal(actions.TYPES.GET_TIME);
        expect(result.data.get('time')).to.be.a('string');
    });

    it('update time should return a string', () => {
        // Arrange

        // Act
        const result = actions.updateTime();

        // Assert
        expect(result).to.have.all.keys(['type', 'data']);
        expect(result.data).to.be.instanceof(Map);
        expect(result.data.toJS()).to.have.all.keys(['time']);
        expect(result.type).to.equal(actions.TYPES.UPDATE_TIME);
        expect(result.data.get('time')).to.be.a('string');
    });
});
