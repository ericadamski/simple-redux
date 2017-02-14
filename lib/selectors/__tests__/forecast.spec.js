import { expect } from 'chai';
import { Map, List } from 'immutable';

import { getForecast } from '../forecast';
import { getTestWeatherObject } from './helpers';

describe('forecast selector', () => {
    it('should retrun an array with proper structure', () => {
        // Arrange
        let list = new List();

        for(let weather of getTestWeatherObject()) {
            list = list.push(weather);
            if (list.size >= 40) break;
        }

        // Act
        const result = getForecast(
            list.get(0),
            list.get(7),
            list.get(15),
            list.get(23),
            list.get(31)
        );

        // Assert
        expect(result).to.be.instanceof(List);
        expect(result.size).to.equal(5);
        expect(result.first()).to.be.instanceof(Map);
        expect(result.first().toJS()).to.have.all.keys(['temp', 'icon', 'condition']);
    });

    it('should fail gracefully', () => {
        // Arrange

        // Act
        const result = getForecast(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        );

        // Assert
        expect(result).to.be.instanceof(List);
        expect(result.size).to.equal(5);
        expect(result.first()).to.be.instanceof(Map);
        expect(result.first().toJS()).to.be.empty;
    });
});
