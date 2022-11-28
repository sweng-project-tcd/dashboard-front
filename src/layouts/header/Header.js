
import PropTypes from 'prop-types';
import {useTheme} from '@mui/material/styles';
// @mui
import { Stack, AppBar, Toolbar, Button, Typography, IconButton, Icon } from '@mui/material';
import { bgBlur } from '../../utils/cssStyles';
import  useOffSetTop  from '../../hooks/useOffSetTop';
import  useResponsive  from '../../hooks/useResponsive';
import { useSettingsContext } from '../../components/settings';

import MenuIcon from '@mui/icons-material/Menu';


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
    const theme = useTheme();

    const { themeLayout } = useSettingsContext();

    const isNavHorizontal = themeLayout === 'horizontal';

    const isNavMini = themeLayout === 'mini';

    const isDesktop = useResponsive('up', 'lg');

    const isOffset = useOffSetTop(HEADER.H_DASHBOARD_DESKTOP_OFFSET);

    const renderContent = (
        <>
        {isDesktop && isNavHorizontal && <Typography>Metrics Dashboard</Typography>}

        {!isDesktop && (
          <IconButton onClick={onOpenNav} size="large">
            <MenuIcon />
          </IconButton>
        )}
    
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
          zIndex: theme.zIndex.appBar + 1,
          ...bgBlur({
            color: theme.palette.background.default,
          }),
          transition: theme.transitions.create(['height'], {
            duration: theme.transitions.duration.shorter,
          }),
          ...(isDesktop && {
            width: `calc(100% - ${NAV.W_DASHBOARD + 1}px)`,
            height: HEADER.H_DASHBOARD_DESKTOP,
            ...(isOffset && {
              height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
            }),
            ...(isNavHorizontal && {
              width: 1,
              bgcolor: 'background.default',
              height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
              borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
            }),
            ...(isNavMini && {
              width: `calc(100% - ${NAV.W_DASHBOARD_MINI + 1}px)`,
            }),
          }),
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