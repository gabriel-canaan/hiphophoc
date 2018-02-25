// import React from 'react';
// import Form from './Form'
// import Adapter from 'enzyme-adapter-react-15';
// import { mount, shallow } from 'enzyme';
//
// test('form renders the text inside it', () => {
//   const Form = { placeholder: name };
//   const wrapper = mount(
//     <Forma Form={Form} />
//   );
//   const p = wrapper.find('form');
//   expect(p.text()).toBe('name');
// });
import React from 'react';
import ReactDOM from 'react-dom';
import Forma from './Form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Forma />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('onPress gets called with the right thing', () => {
  const handleAgeFieldChange = jest.fn();
  simulatePresses(handleAgeFieldChange);
  expect(handleAgeFieldChange).toBeCalledWith(
    expect.objectContaining({
      x: expect.any(Number),
      y: expect.any(Number),
    }),
  );
});
