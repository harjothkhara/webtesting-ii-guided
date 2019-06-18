import React from 'react';
import ReactDOM from 'react-dom'; 
import { render } from "@testing-library/react"; //<<<<<<<<<<
import 'jest-dom/extend-expect'; // <<<<<<<<<

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders successfully', () => {
  render(<App />);
});