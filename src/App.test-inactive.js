import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

/**
 * Factory function to create a ShallowWrapper for the AppComponent
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />);
  if(state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given test-value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - value of data-test attribute to search for
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}


/* test('rendering without crashing', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper,"component-app");
  expect(appComponent.length).toBe(1);
});

test('increment button increases counter value', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper,"increment-button");
  expect(button.length).toBe(1);
});

test('renders counter value', () => {
  const wrapper = setup();
  const displayValue = findByTestAttr(wrapper,"display-value");
  expect(displayValue.length).toBe(1);
});

test('initial counter value is 1', () => {
  const wrapper = setup();
  const initialState = wrapper.state('counter');
  expect(initialState).toBe(1);
});

test('increments counter value display on click of button', () => {
  const wrapper = setup(null, {counter: 7});
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  const text = findByTestAttr(wrapper, 'display-value').text();
  expect(text).toContain(8);
});

test('decrement button decreases the value', () => {
  const wrapper = setup(null, {counter: 7});
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  const text = findByTestAttr(wrapper, 'display-value').text();
  expect(text).toContain(6);
});

test('error is set when the decrement is clicked for counter value 0', () => {
  const wrapper = setup(null, {counter: 0});
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  const errorWrapper = findByTestAttr(wrapper, 'counter-error');
  expect(errorWrapper.length).toBe(1);
});

test('error is set for decrement error below 0, now that error clears when increment button is clicked', () => {
  const wrapper = setup(null, {counter: 0});
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  let errorWrapper = findByTestAttr(wrapper, 'counter-error');
  expect(errorWrapper.length).toBe(1);
  const incButton = findByTestAttr(wrapper, 'increment-button');  
  incButton.simulate('click');
  errorWrapper = findByTestAttr(wrapper, 'counter-error');
  expect(errorWrapper.length).toBe(0);
}); */