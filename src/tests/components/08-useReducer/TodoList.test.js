import React from 'react';
import { shallow } from 'enzyme';

import { TodoList } from '../../../components/08-useReducer/TodoList';

describe('Test in <TodoList />', () => {
  
  test('Should show correctly', () => {
   const wrapper = shallow(<TodoList />);
   expect(wrapper).toMatchSnapshot(); 
  });
  
});