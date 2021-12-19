import React from 'react';
import { shallow } from 'enzyme';

import { HookApp } from '../HookApp';

describe('Test in <HookApp />', () => {
  
  test('Should show correctly', () => {
   const wrapper = shallow(<HookApp />);
   expect(wrapper).toMatchSnapshot(); 
  });
  
});