import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS
const PRIMARY_MAT = {
  //light theme
  main: '#6750A4',
  onMain: '#FFFFFF',
  mainContainer: '#FFFBFE',
  onMainContainer: '#21005D',
  // dark theme
  mainDark: '#D0BCFF',
  onMainDark:  '#381E72',
  mainContainerDark: '#4F378B',
  onMainContainerDark: '#EADDFF',
}
const SECONDARY_MAT = {
  // light theme
  main: '#625B71',
  onMain: '#FFFFFF',
  mainContainer: '#E8DEF8',
  onMainContainer: '#1D192B',
  // dark theme
  mainDark: '#CCC2DC',
  onMainDark: '#332D41',
  mainContainerDark: '#4A4458',
  onMainContainerDark: '#E8DEF8',
}

const TERTIARY_MAT = {
  // light theme
  main: '#7D5260',
  onMain: '#FFFFFF',
  mainContainer: '#FFD8E4',
  onMainContainer: '#31111D',
  // dark theme
  mainDark: '#EFB8C8',
  onMainDark: '#492532',
  mainContainerDark: '#633B48',
  onMainContainerDark: '#FFD8E4',
}
const ERROR_MAT = {
  // light theme
  main: '#B3261E',
  onMain: '#FFFFFF',
  mainContainer: '#F9DEDC',
  onMainContainer: '#1C1B1F',
  // dark theme
  mainDark: '#F2B8B5',
  onMainDark: '#601410',
  mainContainerDark: '#8C1D18',
  onMainContainerDark: '#F9DEDC',
}
const BACKGROUND_MAT = {
  // light theme
  main: '#FFFBFE',
  onMain: '#1C1B1F',
  surface: '#FFFBFE',
  onSurface: '#1C1B1F',

  // dark theme
  mainDark: '#1C1B1F',
  onMainDark: '#E6E1E5',
  surfaceDark: '#1C1B1F',
  onSurfaceDark: '#E6E1E5',
}

const OUTLINE_MAT = {
  // light theme
  main: '#79747E',
  surface_variant: '#E7E0EC',
  onSurface_variant: '#49454F',
  // dark theme
  mainDark: '#938F99',
  surface_variantDark: '#49454F',
  onSurface_variantDark: '#CAC4D0',
}




const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const PRIMARY = {
  lighter: '#C8FACD',
  light: '#5BE584',
  main: '#6750A4',
  dark: '#007B55',
  darker: '#005249',
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#625B71',
  dark: '#1939B7',
  darker: '#091A7A',
  contrastText: '#fff',
};

const INFO = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#7D5260',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#D8FBDE',
  light: '#86E8AB',
  main: '#B3261E',
  dark: '#1B806A',
  darker: '#0A5554',
  contrastText: '#fff',
};

const WARNING = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#fff',
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY_MAT,
  secondary: SECONDARY_MAT,
  tertiary: TERTIARY_MAT,
  error: ERROR_MAT,
  grey: GREY,
  colors: {
    green:'#5BE584',
    blue:'#84A9FF',
    purple:'#6750A4',
    red:'#B3261E',
    orange:'#FFAB00',
    yellow:'#FFD666',
    pink:'#FFAC82',
  },
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default function palette(themeMode) {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: BACKGROUND_MAT.onMain,
      secondary: BACKGROUND_MAT.onMain,
      disabled: BACKGROUND_MAT.onMain,
    },
    background: { 
      paper: BACKGROUND_MAT.main,
      default: BACKGROUND_MAT.main,
      neutral: BACKGROUND_MAT.main
      },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: BACKGROUND_MAT.onMainDark,
      secondary: BACKGROUND_MAT.onMainDark,
      disabled: BACKGROUND_MAT.onMainDark,
    },
    background: {
      paper: BACKGROUND_MAT.mainDark,
      default: BACKGROUND_MAT.mainDark,
      neutral: BACKGROUND_MAT.mainDark,
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  };

  return themeMode === 'light' ? light : dark;
}
