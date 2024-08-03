// pages/_app.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Ensure Bootstrap's JavaScript is loaded
    import('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
