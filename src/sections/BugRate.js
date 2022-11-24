import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import { Card, Typography, Stack } from '@mui/material';
// components
import Iconify from '../components/Iconify';
import Chart, { useChart } from '../components/chart';

// ----------------------------------------------------------------------

BugRate.propTypes = {
  sx: PropTypes.object,
  chart: PropTypes.object,
  color: PropTypes.string,
  total: PropTypes.number,
  percent: PropTypes.number,
};

export default function BugRate({ total, percent, color = 'primary', chart, sx, ...other }) {
  const theme = useTheme();

  const { series, options } = chart;

  const chartOptions = useChart({
    colors: [theme.palette[color].main],
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    stroke: {
      width: 4,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      marker: {
        show: false,
      },
      y: {
        title: {
          formatter: () => '',
        },
      },
    },
    fill: { gradient: { opacityFrom: 0, opacityTo: 0 } },
    ...options,
  });

  return (
    <Card
      sx={{
        p: 3,
        boxShadow: 0,
        color: `${color}.darker`,
        bgcolor: '#efefef',
        ...sx,
      }}
      {...other}
    >
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
        <div>
          <Typography sx={{ mb: 2, typography: 'subtitle2' }}>Total Bugs</Typography>
          <Typography sx={{ typography: 'h3' }}>{total}</Typography>
        </div>

        <div>
          <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ mb: 0.6 }}>
            <Iconify icon={percent >= 0 ? 'eva:trending-up-fill' : 'eva:trending-down-fill'} />

            <Typography variant="subtitle2" component="span" sx={{ ml: 0.5 }}>
              {percent > 0 && '+'}
              {percent}
            </Typography>
          </Stack>

          <Typography variant="body2" component="span" sx={{ opacity: 0.72 }}>
            &nbsp;than last month
          </Typography>
        </div>
      </Stack>

      <Chart type="area" series={[{ data: series }]} options={chartOptions} height={132} />
    </Card>
  );
}
