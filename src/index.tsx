import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 1. import `ChakraProvider` component and extendTheme function
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// Extend the theme to include custom colors, fonts, etc
const brandColors = {
  brand: {
    plum: '#431E37',
    creamsicle: '#FE9927',
    dustyBlue: '#272A4D',
    clay: '#5B2A06',
    inky: '#10050B',
    paper: '#F0EEE1',
    palmSprings: '#DD735C',
    slate: '#4E5B6E',
    ash: '#9796A3',
    ballet: '#E9C9AC',
  },
};

const theme = extendTheme({ brandColors });

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
