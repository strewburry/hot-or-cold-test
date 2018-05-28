import React from 'react';
import { shallow } from 'enzyme';

import Feedback from './feedback';

describe('<Feedback/>', () => {
    it('should render without crashing', () => {
        shallow(<Feedback />);
    })

    it('renders feedback', () => {
        let testFeedback = 'This is some test feedback';
        let wrapper = shallow(<Feedback feedback={testFeedback}/>);
        expect(wrapper.contains(testFeedback)).toEqual(true);
    })
})