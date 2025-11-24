import { Box } from '@mui/material';
import Footer from '../footer/footer';
import Header from '../header/header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box>
        <Header />
      </Box>

      <Box flexGrow={1}>
        <Outlet />
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default MainLayout;
