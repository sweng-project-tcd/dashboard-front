import PropTypes from 'prop-types';
// @mui
import { Box, Card, CardHeader } from '@mui/material';

import Chart, {useChart} from '../components/chart';


TimeBetweenCommits.prototype = {
    title: PropTypes.object,
    subheader: PropTypes.string,
    chart: PropTypes.object,
}

export default function TimeBetweenCommits({title, subheader, chart, ...other}){
    const { colors, series, options } = chart;

  const chartSeries = series.map((i) => i.value);

  const chartOptions = useChart({
    colors,
    tooltip: {
      marker: { show: false },
      y: {
        title: {
          formatter: () => '',
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '28%',
        borderRadius: 2,
      },
    },
    xaxis: {
      categories: series.map((i) => i.label),
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }} dir="ltr">
        <Chart type="bar" series={[{ data: chartSeries }]} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
