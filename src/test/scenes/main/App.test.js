import React from 'react';
import ReactDOM from 'react-dom';
import App from 'scenes/main/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
