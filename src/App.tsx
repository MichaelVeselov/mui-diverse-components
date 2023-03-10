import { ThemeProvider, createTheme, colors } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// import { MuiTypography } from './components/MuiTypography';
// import { MuiButton } from './components/MuiButton';
// import { MuiTextField } from './components/MuiTextField';
// import { MuiSelect } from './components/MuiSelect';
// import { MuiRadioButton } from './components/MuiRadioButton';
// import { MuiCheckBox } from './components/MuiCheckBox';
// import { MuiSwitch } from './components/MuiSwitch';
// import { MuiRating } from './components/MuiRating';
// import { MuiAutocomplete } from './components/MuiAutocomplete';
// import { MuiLayout } from './components/MuiLayout';
// import { MuiCard } from './components/MuiCard';
// import { MuiAccordion } from './components/MuiAccordion';
// import { MuiImageList } from './components/MuiImageList';
// import { MuiNavbar } from './components/MuiNavbar';
// import { MuiMenu } from './components/MuiMenu';
// import { MuiLink } from './components/MuiLink';
// import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
// import { MuiDrawer } from './components/MuiDrawer';
// import { MuiSpeedDial } from './components/MuiSpeedDeal';
// import { MuiBottomNavigation } from './components/MuiBottomNavigation';
// import { MuiAvatar } from './components/MuiAvatar';
// import { MuiBadge } from './components/MuiBadge';
// import { MuiList } from './components/MuiList';
// import { MuiChip } from './components/MuiChip';
// import { MuiTooltip } from './components/MuiTooltip';
// import { MuiTable } from './components/MuiTable';
// import { MuiAlert } from './components/MuiAlert';
// import { MuiSnackbar } from './components/MuiSnackbar';
// import { MuiDialog } from './components/MuiDialog';
// import { MuiProgress } from './components/MuiProgress';
// import { MuiSkeleton } from './components/MuiSkeleton';
// import { MuiLoadingButton } from './components/MuiLoadingButton';
// import { MuiDateTimePicker } from './components/MuiDateTimePicker';
// import { MuiDateRangePicker } from './components/MuiDateRangePicker';
// import { MuiTabs } from './components/MuiTabs';
// import { MuiTimeLine } from './components/MuiTimeLine';
// import { MuiMasonry } from './components/MuiMasonry';
// import { MuiResponsiveness } from './components/MuiResponsiveness';

const theme = createTheme({
  status: { danger: '#e53e3e' },
  palette: { secondary: { main: colors.orange[500] }, neutral: { main: colors.grey[500], darker: colors.grey[700] } },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <>
          {/* <MuiTypography /> */}
          {/* <MuiButton /> */}
          {/* <MuiTextField /> */}
          {/* <MuiSelect /> */}
          {/* <MuiRadioButton /> */}
          {/* <MuiCheckBox /> */}
          {/* <MuiSwitch /> */}
          {/* <MuiRating /> */}
          {/* <MuiAutocomplete /> */}
          {/* <MuiLayout /> */}
          {/* <MuiCard /> */}
          {/* <MuiAccordion /> */}
          {/* <MuiImageList /> */}
          {/* <MuiNavbar /> */}
          {/* <MuiMenu /> */}
          {/* <MuiLink /> */}
          {/* <MuiBreadcrumbs /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiSpeedDial /> */}
          {/* <MuiBottomNavigation /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          {/* <MuiList /> */}
          {/* <MuiChip /> */}
          {/* <MuiTooltip /> */}
          {/* <MuiTable /> */}
          {/* <MuiAlert /> */}
          {/* <MuiSnackbar /> */}
          {/* <MuiDialog /> */}
          {/* <MuiProgress /> */}
          {/* <MuiSkeleton /> */}
          {/* <MuiLoadingButton /> */}
          {/* <MuiDateTimePicker /> */}
          {/* <MuiDateRangePicker /> */}
          {/* <MuiTabs /> */}
          {/* <MuiTimeLine /> */}
          {/* <MuiMasonry /> */}
          {/* <MuiResponsiveness /> */}
        </>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
