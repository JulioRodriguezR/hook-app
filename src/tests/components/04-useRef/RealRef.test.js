import React from 'react';
import { shallow } from "enzyme";

import { RealRef } from '../../../components/04-useRef/RealRef';

describe('Test in <RealRef />', () => {

  test('Should show correctly', () => {
    const wrapper = shallow(<RealRef />);
    
    expect(wrapper).toMatchSnapshot(); 
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false); 
  });

  test('Should show <MultipleCustomHooks /> component', () => {
    const wrapper = shallow(<RealRef />);

    wrapper.find('button').simulate('click');

    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true); 
  });

});