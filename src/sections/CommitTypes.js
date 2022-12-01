import PropTypes from 'prop-types';
// @mui
import { Box, Card, CardHeader } from '@mui/material';
// components
import Chart, { useChart } from '../components/chart';


// ----------------------------------------------------------------------
CommitTypes.propTypes = {
    chart: PropTypes.object,
    title: PropTypes.string,
    subheader: PropTypes.string,
  };


export default function CommitTypes({title, subheader, chart, ...other}){

    const { colors, series, options } = chart;

  const chartSeries = series.map((i) => i.value);

  const chartOptions = useChart({
    colors,
    tooltip: {
      marker: { show: false },
      y: {
        
          formatter: (val) => val,
        
      },
    },
    chart:{
       type: 'bar',
       stacked: true,
       stackType: "100%", 
    },
    plotOptions: {
      bar: {
        horizontal: true,
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