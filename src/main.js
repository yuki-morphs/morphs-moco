import version from './version.js';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('hello-world')
);

document.write('<h2>' + version().toString() + '</h2>');
