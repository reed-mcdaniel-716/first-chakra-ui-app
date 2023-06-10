import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 1. import `ChakraProvider` component and extendTheme function
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// Photo by <a href="https://unsplash.com/@zacharykadolph?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Zachary Kadolph</a> on <a href="https://unsplash.com/photos/hwHHq82Enf0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

// Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    mediumSlateBlue: '#8670EB',
    richBlack: '#030314',
    savoyBlue: '#5163E5',
    murrey: '#890250',
    aliceBlue: '#ECF6FE',
  },
};

const theme = extendTheme({ colors });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// 2. Wrap ChakraProvider at the root of your app
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
