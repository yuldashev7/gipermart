import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './config/ui/mui-theme.js';
import { QueryClientProvider } from '@tanstack/react-query';
import { client } from './config/data/query-client.js';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
          <ToastContainer />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>
);
