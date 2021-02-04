import React from 'react';
import HooksApp from '../HooksApp';
import { shallow } from 'enzyme';

describe('Testing <HooksApp />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<HooksApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
