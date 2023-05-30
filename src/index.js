import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


/* const spantag = React.createElement(
  "span",
  {"className": "spanText"},
  "This is a Span of Text"
);

const h1tag = React.createElement(
  "h1",
  {"className": "headerText"},
  spantag
);*/

// root.render(h1tag);

/* root.render(
  React.createElement(
    "h1",
    {"className": "headerText"},
    React.createElement(
      "span",
      {"className": "spanText"},
      React.createElement(
        "b",
        null,
        "This is a Bold Text"
      )
    )
  )
);*/ 

root.render(
  <React.StrictMode>
    <App />
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
