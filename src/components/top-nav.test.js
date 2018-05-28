import React from 'react';
import { shallow } from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav/>', () => {
    it('should render without crashing', () => {
        shallow(<TopNav/>);
    })

    it('should fire callback when user selects new game', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onRestartGame={callback}/>);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        })
        expect(callback).toHaveBeenCalled(); 
    })

    it('should fire callback to generate aural update when user clicks state-of-game link', () => {
        const callback = jest.fn(); 
        const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback}/>);
        const link = wrapper.find('.status-link');
        link.simulate('click', {
            preventDefault() {}
        })
        expect(callback).toHaveBeenCalled();
    })
})