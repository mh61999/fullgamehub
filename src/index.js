import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import './index.css';
import App from './App';
import theme from './services/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
    <ColorModeScript></ColorModeScript>
  </React.StrictMode>
);