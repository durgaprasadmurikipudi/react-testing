
import React from 'react';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../src/reducers/index';
import { middlewares } from '../src/configureStore/store';


export function getMockStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
}

/**
 * Factory function to create a ShallowWrapper for the AppComponent
 * @function setup
 * @param {React.Component} Component - Component that should be displayed.
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
export const setup = (Component, props={}, state=null) => {
  const wrapper = shallow(<Component {...props} />);
  if(state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given test-value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - value of data-test attribute to search for
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}