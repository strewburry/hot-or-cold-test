import React from 'react';
import { shallow } from 'enzyme'; 

import AuralStatus from './aural-status';

describe('<AuralStatus/>', () => {
    it('should render without crashing', () => {
        shallow(<AuralStatus />);
    })

    it('should give an aural status update', () => {
        let testUpdate = 'You are playing Hot or Cold.';
        let wrapper = shallow(<AuralStatus auralStatus={testUpdate}/>);
        expect(wrapper.contains(testUpdate)).toEqual(true);
    })
})