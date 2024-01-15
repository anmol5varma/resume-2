import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { headData } from './mock/data';
import './style/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
const { title, lang, description } = headData;
root.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <html lang={lang} />
      <meta name="description" content={description} />
    </Helmet>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
