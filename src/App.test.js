import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';

describe('App testing', () => {
  test('testing getSecretWord mock function', () => {
    const getSecretWordMock = jest.fn();
    const wrapper = shallow(<App getTheSecretWord={getSecretWordMock} />);

    wrapper.instance().componentDidMount();

    expect(getSecretWordMock.mock.calls.length).toBe(1);

  });
});