import React from 'react';

import Congrats from './Congrats';
import { setup, findByTestAttr } from '../test/test-utils';

test('renders app without crashing', () => {
  const wrapper = setup(Congrats);
  const message = findByTestAttr(wrapper, 'congrats-component');
  expect(message.length).toBe(1);
});

test('displays congratulatory message when props is true', () => {
  const wrapper = setup(Congrats, null, { success: true});
  const messageText = findByTestAttr(wrapper, 'congrats-message').text();
  expect (messageText.length).toBeGreaterThan(0);
});

test('displays nothing when props is false', () => {
  const wrapper = setup(Congrats, null, { success: false});
  const messageText = findByTestAttr(wrapper, 'congrats-message').text();
  expect (messageText.length).toBe(0);
});
