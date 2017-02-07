import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { Clock } from '../clock/clock';

describe('clock', () => {
    it('should render', () => {
        // Arrange

        // Act
        const wrapper = shallow(<Clock />);

        // Assert
        expect(wrapper).to.not.be.undefined;
    });

    it('should render a top level div', () => {
        // Arrange

        // Act
        const wrapper = shallow(<Clock />);

        // Assert
        expect(wrapper.find('div').length).to.be.at.least(1);
    });

    it('should have the class name clock', () => {
        // Arrange

        // Act
        const wrapper = shallow(<Clock />);

        // Assert
        expect(wrapper.find('div.clock').length).to.equal(1);
    });

    it('should have the class name time', () => {
        // Arrange

        // Act
        const wrapper = shallow(<Clock />);

        // Assert
        expect(wrapper.find('div.time').length).to.equal(1);
    });
});
