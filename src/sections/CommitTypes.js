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

    const { colors,categories, series, options, } = chart;

  const chartOptions = useChart({
    colors,
    tooltip: {
        marker:{show: true},
      
    },
    chart:{
       type: 'bar',
       stacked: true,
       stackType: '100%', 
    },
    dataLabels: {enabled:true},

    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: categories,
      formatter: function(val){return val+ '%' }

    },
    yaxis:{
        formatter: function(val){return val+ '%' }
    },
    stroke: {
        width: 1,
        colors: ['#fff']
      },
    fill: {
        opacity: 1
      
    },
    
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }} dir="ltr">
        <Chart type="bar" series={series} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}