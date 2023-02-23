import { Grid, Paper, Box, Stack, Divider } from '@mui/material';

export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: '32px' }} elevation={4}>
      <Stack
        sx={{ border: '1px solid' }}
        direction='row-reverse'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        divider={<Divider orientation='vertical' flexItem />}
      >
        <Box
          component='div'
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            height: '100px',
            width: '100px',
            padding: '16px',
            '&:hover': { backgroundColor: 'primary.light' },
          }}
        >
          MuiLayout
        </Box>
        <Box display='flex' width='100px' height='100px' bgcolor='success.light' p={2}></Box>
      </Stack>
      <Grid container rowSpacing={2} columnSpacing={1} my={4}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='primary.light' padding={2}>
            Item 01
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='primary.light' padding={2}>
            Item 02
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='primary.light' padding={2}>
            Item 03
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='primary.light' padding={2}>
            Item 04
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
