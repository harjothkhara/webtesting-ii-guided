import React from 'react';
import ReactDOM from 'react-dom'; 
import { render, fireEvent } from "@testing-library/react"; //<<<<<<<<<<
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

    //getByText - fails test if whatever your looking for in the DOM is not there
    //queryByText - will return null but will not fail your test.

    getByText(/hello world/i);
    // expect(queryByText(/hello world/i)).not.toBeNull();
  });

  it('greets the team', () => {
    const { getByText } = render(<App />) //render component and grab getByText

    const button = getByText(/greet/i); //use getByText to find the button

    fireEvent.click(button); //then we click on the button
    getByText(/hello web xviiii/i) //check whether we have this greeting in our UI (if not, code is broken)

  });
  it('says goodbye', () => {
    const { getByText } = render(<App />) //render component and grab getByText

    const button = getByText(/bye/i); //use getByText to find the button

    fireEvent.click(button); //then we click on the button
    getByText(/bye web xviiii/i) //check whether we have this greeting in our UI (if not, code is broken)

  });
});