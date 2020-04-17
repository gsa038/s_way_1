import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';
// import App from './App';
import MainApp from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<MainApp />);
//   const linkElement = getByText(Friends);
//   expect(linkElement).toBeInTheDocument();
// });


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainApp />, div);
    ReactDOM.unmountComponentAtNode(div);
})