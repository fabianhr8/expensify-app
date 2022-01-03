import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { LoginPage } from '../../components/LoginPage';

test('Should render LoginPage correctly', () => {
    // const renderer  = new ReactShallowRenderer();
    // renderer.render(<LoginPage />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('Should call startGoogleLogin on button click', () => {
    // Use a spy
    const startGoogleLogin = jest.fn();
    const wrapper = shallow(<LoginPage startGoogleLogin={startGoogleLogin} />);
    wrapper.find('button').simulate('click');
    expect(startGoogleLogin).toHaveBeenCalled();
});
