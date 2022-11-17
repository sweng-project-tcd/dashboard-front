import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Box } from '@mui/material';
import Header from './header';
DashboardLayout.propTypes = {
    children: PropTypes.node,
};

export default function DashboardLayout({ children }) {

    const renderContent = () => {
        return (
            <>
              <Header  />
      
              <Box
                sx={{
                  display: { lg: 'flex' },
                  minHeight: { lg: 1 },
                }}
              >
      
                <Main>{children}</Main>
              </Box>
            </>
          );
    }

    return renderContent();
}