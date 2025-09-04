import { Typography } from '@mui/material';
import { COLOR } from './config/ui/colors';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/main-layout/main-layout';
import Home from './pages/home/home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
