import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './assets/app/App.tsx';
import '../styles.css';
import { AppContextProvider } from './assets/constext/phoneContextProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
