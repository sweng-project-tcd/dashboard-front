import PropTypes from 'prop-types';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------
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
const SPACING = 8;

Main.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node,
};

export default function Main({ children, sx, ...other }) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: `${HEADER.H_MOBILE + SPACING}px`,
        px: 2,
        py: `${HEADER.H_DASHBOARD_DESKTOP + SPACING}px`,
        width: `calc(100% - ${NAV.W_DASHBOARD}px)`,
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
