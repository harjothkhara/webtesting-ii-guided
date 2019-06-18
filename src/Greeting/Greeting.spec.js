import React from 'react';
import { render } from "@testing-library/react";

import Greeting from './Greeting';

describe('<Greeting />', () => {
it('renders No Message if message provided', () => {
        const { getByText } = render(<Greeting />);

        getByText('/no message/i')
    });

    it('renders the provided message', () => {
        const { getByText } = render(<Greeting msg="Hello Team"/>);

        getByText('/hello team/i')
    });
});