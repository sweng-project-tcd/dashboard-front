// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Link, Typography, Avatar } from '@mui/material';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.mainContainerDark : theme.palette.secondary.mainContainer,
  color: theme.palette.mode === 'dark' ? theme.palette.secondary.onMainContainerDark : theme.palette.secondary.onMainContainer,
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
}));

// ----------------------------------------------------------------------

export default function NavAccount() {

  return (
    <Link underline="none" color="inherit">
      <StyledRoot>
        <Avatar>N</Avatar>

        <Box sx={{ ml: 2, minWidth: 0 }}>
          <Typography variant="subtitle2" noWrap>
            User
          </Typography>

          <Typography variant="body2" noWrap >
            User type
          </Typography>
        </Box>
      </StyledRoot>
    </Link>
  );
}
