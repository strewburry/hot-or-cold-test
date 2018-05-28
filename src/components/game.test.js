import React from 'react';
import { shallow } from 'enzyme';

import Game from './game';

describe('<Game/>', () => {
    it('should render without crashing', () => {
        shallow(<Game/>);
    })

    it('should accept guesses', () => {
        const wrapper = shallow(<Game/>);
        wrapper.setState({
            correctAnswer: 100
        });

        wrapper.instance().makeGuess(30);
        expect(wrapper.state('guesses')).toEqual([30]);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

        wrapper.instance().makeGuess(70);
        expect(wrapper.state('guesses')).toEqual([30, 70]);
        expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

        wrapper.instance().makeGuess(90);
        expect(wrapper.state('guesses')).toEqual([30, 70, 90]);
        expect(wrapper.state('feedback')).toEqual('You\'re Warm.');

        wrapper.instance().makeGuess(99);
        expect(wrapper.state('guesses')).toEqual([30, 70, 90, 99]);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

        wrapper.instance().makeGuess(100);
        expect(wrapper.state('guesses')).toEqual([30, 70, 90, 99, 100]);
        expect(wrapper.state('feedback')).toEqual('You got it!');
    })

    it('should restart game', () => {
        const wrapper = shallow(<Game/>); 
        wrapper.setState({
            guesses: [5, 10, 15, 20],
            feedback: 'You\'re either hot or cold.',
            correctAnswer: 300
        });
        wrapper.instance().restartGame(); 
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    })
})