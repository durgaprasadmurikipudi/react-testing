import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';
import { getMockStore ,findByTestAttr } from '../test/test-utils';

const customSetup = (initialState = {}) => {
  const store = getMockStore(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
};

describe('render', () => {
  describe('when the word has not been guessed', () => {
    let wrapper;

    beforeEach(() => {      
      const initialState = {success: { success: false }}
      wrapper = customSetup(initialState);
    });

    test('should render without any error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('should render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });

    test('should render submit button without any error', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
    
  });
  
  describe('when the word has been guessed', () => {
    let wrapper;

    beforeEach(() => {      
      const initialState = {success: { success: true }}
      wrapper = customSetup(initialState);
    });
    test('should render without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('should not render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });

    test('should not render submit button without any error', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    });
    
  });

  
});

describe('redux props', () => {

  const initialState =  value => ({success: { success: value }});    
  
  test('has success piece of props', () => {
    const wrapper = customSetup(initialState(true));
    const successProps = wrapper.instance().props.success;
    expect(successProps).toBe(true); 
  });

  test('has guessWord piece of props', () => {
    const wrapper = customSetup();
    const guessWordProps = wrapper.instance().props.guessTheWord;
    expect(guessWordProps).toBeInstanceOf(Function);
  });

});

