import React from 'react';
import ReactDOM from 'react-dom';
import { DisplayWeather } from '../display-weather';
import { shallow } from 'enzyme';

const defaultProps = { location: 'home' };

const create = () => shallow(
  (<DisplayWeather {...defaultProps} />)
);

describe('DisplayWeather Component', () => {
  it('displays passed in location prop', () => {
    const wrapper = create();
    const input = wrapper.find('input');
    // console.log(wrapper.state());
    // console.log(wrapper.debug());
    expect(input.props().value).toBe(wrapper.state().searchCity);
    expect(wrapper.state().searchCity).toBe(defaultProps.location);
  }) 
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DisplayWeather />, div);
});


