import PropTypes from 'prop-types';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

import Iconify from '../components/Iconify';

// ----------------------------------------------------------------------

WeeklySummaryWidget.propTypes = {
  sx: PropTypes.object,
  icon: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  total: PropTypes.number,
};

export default function WeeklySummaryWidget({ title, total, icon, color = 'primary', sx, ...other }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: "blue",
        backgroundColor: '#efefef',
        ...sx,
      }}
      {...other}
    >
      <Iconify
        icon={icon}
        sx={{
          mb: 3,
          p: 2.5,
          width: 64,
          height: 64,
          borderRadius: '50%',
          color: (theme) => theme.palette[color].dark,
        }}
      />
      <Typography variant="h3">{total}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 1 }}>
        {title}
      </Typography>
    </Card>
  );
}