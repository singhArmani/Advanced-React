import React from 'react';
import ReactDOMSever from 'react-dom/server';
import App from 'components/App';

export default () => {
  return ReactDOMSever.renderToString(<App />);
};
