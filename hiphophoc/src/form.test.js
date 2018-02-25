import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import configure from './setupTests'
import Forma from './Form';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Forma />, div);
  ReactDOM.unmountComponentAtNode(div);
});



it('renders name', () => {
  const wrapper = shallow(<Forma />);
  const name = <Form.Input>{this.state.name}</Form.Input>;
  expect(wrapper).toContainReact(name)
});

test('onPress gets called with the right thing', () => {
  const onSubmit = jest.fn();
  simulatePresses(onSubmit);
  expect(onSubmit).toBeCalledWith(
    expect.objectContaining({
      x: expect.any(Number),
      y: expect.any(Number),
    }),
  );
});
