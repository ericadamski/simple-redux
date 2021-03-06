import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moment from 'moment';
import { expect } from 'chai';
import { Map } from 'immutable';
import { action } from '../utils';
import * as actions from '../date';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('date actions', () => {
    it('should return todays date in the correct format', async () => {
        // Arrange
        const date = moment().format(actions.CONSTANTS.DATE_FORMAT); //'ddd the Do of MMMM'
        const expectedActions = [ action(actions.TYPES.GET_DATE, new Map({ date })) ];
        const store = mockStore({});

        // Act
        await store.dispatch(actions.getTodaysDate());

        // Assert
        expect(store.getActions()).to.deep.equal(expectedActions);
    });
});
