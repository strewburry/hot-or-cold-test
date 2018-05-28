import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm/>', () => {
    it('should render without crashing', () => {
        shallow(<GuessForm/>);
    })

    it('should fire callback when user makes a guess', () => {
        const callback = jest.fn(); 
        const wrapper = mount(<GuessForm onMakeGuess={callback}/>);
        const guess = 15; 
        wrapper.find('input[type="number"]').instance().value = guess; 
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(guess.toString());
    })

    it('should reset input on form submission', () => {
        const wrapper = mount(<GuessForm />);
        const input = wrapper.find('input[type="number"]');
        input.instance().value = 15;
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
    })
})