import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import DoRightProgressBar from './DoRightProgressBar';

Enzyme.configure({adapter: new Adapter()});

describe('DoRightProgressBar', () => {
    test('getWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50', () => {
        const wrapper = shallow(<DoRightProgressBar percent={50} width={500} />);
        const width = wrapper.instance().getWidthAsPercentOfTotalWidth();

        expect(width).toEqual(250);
    });
});