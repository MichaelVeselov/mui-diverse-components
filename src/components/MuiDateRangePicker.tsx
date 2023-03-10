import { useState } from 'react';

import { Box } from '@mui/material';

import { DateRange, DateRangePicker } from '@mui/x-date-pickers-pro';

export const MuiDateRangePicker = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  return (
    <Box sx={{ width: '500px' }}>
      <DateRangePicker
        localeText={{ start: 'Check-in', end: 'Check-out' }}
        calendars={1}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      ></DateRangePicker>
    </Box>
  );
};
