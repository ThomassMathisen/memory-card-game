import React from 'react';
import { ThemeProvider } from "styled-components"
import ReactDOM from 'react-dom/client';
import GlobalStyle from "./theme/GlobalStyle"
import Theme from "./theme/Theme"
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

