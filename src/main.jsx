import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './config/ui/mui-theme.js';
import { client } from './config/data/query-client.js';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';

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
