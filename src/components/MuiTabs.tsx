import { useState } from 'react';

import { Box, Tab } from '@mui/material';

import { TabContext, TabList, TabPanel } from '@mui/lab';

import FavoriteIcon from '@mui/icons-material/Favorite';

export const MuiTabs = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '300px' }}>
          <TabList
            aria-label='Tabs example'
            onChange={handleChange}
            textColor='secondary'
            indicatorColor='secondary'
            // centered
            variant='scrollable'
            scrollButtons='auto'
          >
            <Tab label='One' value='1' icon={<FavoriteIcon />} iconPosition='start'></Tab>
            <Tab label='Two' value='2' disabled></Tab>
            <Tab label='Three' value='3'></Tab>
            <Tab label='Four' value='4'></Tab>
            <Tab label='Five' value='5'></Tab>
            <Tab label='Six' value='6'></Tab>
          </TabList>
        </Box>
        <TabPanel value='1'>Show Panel One</TabPanel>
        <TabPanel value='2'>Show Panel Two</TabPanel>
        <TabPanel value='3'>Show Panel Three</TabPanel>
        <TabPanel value='4'>Show Panel Four</TabPanel>
        <TabPanel value='5'>Show Panel Five</TabPanel>
        <TabPanel value='6'>Show Panel Six</TabPanel>
      </TabContext>
    </Box>
  );
};
