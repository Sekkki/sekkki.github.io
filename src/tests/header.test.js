import React from 'react';
import Header from '../components/Layouts/Header/header';
import Helper from '../components/Layouts/Header/helper';
import Menu from '../components/Layouts/Header/menu';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<Header />', () => {

it('renders without crashing', () => {
    jest.useFakeTimers();

    const wrapper = mount(<Header />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();

    jest.runAllTimers();

    expect(wrapper.find('.helper').simulate('click'));

    wrapper.unmount();
})

});

describe('<Helper />', () => {
    it('renders without crashing', () => {
        jest.useFakeTimers();

        const wrapper = mount(<Helper />);
    })
})