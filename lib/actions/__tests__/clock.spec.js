import { expect } from 'chai';
import { Map } from 'immutable';
import { createEpicMiddleware } from 'redux-observable';
import configureMockStore from 'redux-mock-store';
import * as actions from '../clock';

const epicMiddleware = createEpicMiddleware(actions.requestTimeEpic);
const mockStore = configureMockStore([ epicMiddleware ]);

describe('clock actions', () => {
    let store;

    beforeEach(() => store = mockStore());

    afterEach(() => epicMiddleware.replaceEpic(actions.requestTimeEpic));

    it('get time should dispatch an action', () => {
        // Arrange

        // Act
        const result = actions.getTime();

        // Assert
        expect(result.type).to.equal(actions.TYPES.GET_TIME);
    });

    it('update time should dispatch an action', () => {
        // Arrange

        // Act
        const result = actions.updateTime();

        // Assert
        expect(result.type).to.equal(actions.TYPES.UPDATE_TIME);
    });

    it('getTime() should update the time', () => {
        // Arrange

        // Act
        store.dispatch(actions.getTime());

        // Assert
        const storeActions = store.getActions();
        expect(storeActions).to.have.lengthOf(2);
        expect(storeActions[1]).to.have.all.keys(['type', 'data']);
        expect(storeActions[1].type).to.equal(actions.TYPES.GET_TIME_SUCCESS);
        expect(storeActions[1].data).to.be.instanceof(Map)
        expect(storeActions[1].data.get('time')).to.be.a.string;
    });

    it('updateTime() should update the time', () => {
        // Arrange

        // Act
        store.dispatch(actions.updateTime());

        // Assert
        const storeActions = store.getActions();
        expect(storeActions).to.have.lengthOf(2);
        expect(storeActions[1]).to.have.all.keys(['type', 'data']);
        expect(storeActions[1].type).to.equal(actions.TYPES.GET_TIME_SUCCESS);
        expect(storeActions[1].data).to.be.instanceof(Map)
        expect(storeActions[1].data.get('time')).to.be.a.string;
    });
});
