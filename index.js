import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Name(props) {
  return <h1>Hello, my name is Ivan Popovych</h1>
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <Name />
);


