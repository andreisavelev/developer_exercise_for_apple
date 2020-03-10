import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navigation from "./Navigation";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({
    adapter: new Adapter()
});

describe('<Navigation />', () => {
    it('Should render three <NavigetionItem />', () => {
        const cities = [
            {
                section: 'cupertino',
                label: 'Cupertino'
            },
            {
                section: 'tokyo',
                label: 'Tokyo'
            },
            {
                section: 'sydney',
                label: 'Sydney'
            }
        ];
        const wrapper = shallow(<Navigation items={cities}/>);

        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });
});