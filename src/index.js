import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import VisibilityContextProvider from "./context/visibilityProvider";

ReactDOM.render(
  <React.StrictMode>
      <VisibilityContextProvider>
          <App />
      </VisibilityContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance Login your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
