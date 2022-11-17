
import PropTypes from 'prop-types';
// @mui
import { Stack, AppBar, Toolbar, Button } from '@mui/material';

Header.propTypes = {
    onOpenNav: PropTypes.func,
  };
const HEADER = {
    H_MOBILE: 64,
    H_MAIN_DESKTOP: 88,
    H_DASHBOARD_DESKTOP: 92,
    H_DASHBOARD_DESKTOP_OFFSET: 92 - 32,
  };
const NAV = {
    W_BASE: 260,
    W_DASHBOARD: 280,
    W_DASHBOARD_MINI: 88,
    //
    H_DASHBOARD_ITEM: 48,
    H_DASHBOARD_ITEM_SUB: 36,
    //
    H_DASHBOARD_ITEM_HORIZONTAL: 32,
};

export default function Header({ onOpenNav }) {
    const renderContent = (
        <>
    
          <Stack flexGrow={1} direction="row" alignItems="center" justifyContent="flex-end" spacing={{ xs: 0.5, sm: 1.5 }}>
            <Button >This is a NAV button</Button>
          </Stack>
        </>
      );
    return (
      <AppBar
        sx={{
          boxShadow: 'none',
          height: HEADER.H_MOBILE,
          width: `100%`,
          height: HEADER.H_DASHBOARD_DESKTOP,
        }}
      >
        <Toolbar
          sx={{
            height: 1,
            px: { lg: 5 },
          }}
        >
          {renderContent}
        </Toolbar>
      </AppBar>
    );
  }