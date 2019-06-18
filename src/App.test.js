import React from 'react';
import ReactDOM from 'react-dom'; 
import { render } from "@testing-library/react"; //<<<<<<<<<<
import 'jest-dom/extend-expect'; // <<<<<<<<<
import '@testing-library/react/cleanup-after-each';

import App from './App';

describe('<App />', () => {

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders successfully', () => {
  render(<App />);
});

  it('renders Hello World', () => {
    const { getByText, queryByText, debug } = render(<App /> );
    // console.log('helpers', helpers) all helper methods available
    //focus on getBy, queryBy...

    debug();

    // getByText(/hello world/i);
    expect(queryByText(/hello world/i)).not.toBeNull();
  });
});