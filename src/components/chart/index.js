import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// ----------------------------------------------------------------------

// styles
export { default as StyledChart } from './styles';

export { default as useChart } from './useChart';

export default Chart;