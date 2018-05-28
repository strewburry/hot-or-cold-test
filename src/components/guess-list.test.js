import React from 'react';
import { shallow } from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList/>', () => {
    it('should render without crashing', () => {
        shallow(<GuessList guesses={[]}/>);
    })

    it('should render a list of all previous guesses', () => {
        const guesses = [5, 10, 15, 20];
        const wrapper = shallow(<GuessList guesses={guesses}/>);
        const listItems = wrapper.find('li');
        expect(listItems.length).toEqual(guesses.length);
        guesses.forEach((guess, index) => {
            expect(listItems.at(index).text()).toEqual(guess.toString());
        })
    })
})