import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Box } from '@mui/material';
import Header from './header';

import { useSettingsContext } from '../components/settings';

import useResponsive from '../hooks/useResponsive';

import NavVertical from './nav/NavVertical';
import NavMini from './nav/NavMini';
import NavHorizontal from './nav/NavHorizontal';
DashboardLayout.propTypes = {
    children: PropTypes.node,
};

export default function DashboardLayout({ children }) {
    const { themeLayout } = useSettingsContext();

    const isDesktop = useResponsive('up', 'lg');
    
    const [open, setOpen] = useState(false);

    const isNavHorizontal = themeLayout === 'horizontal';

    const isNavMini = themeLayout === 'mini';

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const renderNavVertical = <NavVertical openNav={open} onCloseNav={handleClose} />;

    const renderContent = () => {
      if (isNavHorizontal) {
        consle.log('isNavHorizontal');
        return (
          <>
            <Header onOpenNav={handleOpen} />
  
            {isDesktop ? <NavHorizontal /> : renderNavVertical}
  
            {children}
          </>
        );
      }
      if (isNavMini) {
        console.log('isNavMini');
        return (
          <>
            <Header onOpenNav={handleOpen} />
  
            <Box
              sx={{
                display: { lg: 'flex' },
                minHeight: { lg: 1 },
              }}
            >
              {isDesktop ? <NavMini /> : renderNavVertical}
  
              {children}
            </Box>
          </>
        );
      }
      console.log('isNavVertical');
        return (
            <>
              <Header onOpenNav={handleOpen} />
      
              <Box
                sx={{
                  display: { lg: 'flex' },
                  minHeight: { lg: 1 },
                }}
              >
                {renderNavVertical}
      
                {children}
              </Box>
            </>
          );
    }

    return renderContent();
}