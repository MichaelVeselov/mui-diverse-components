import { useState } from 'react';

import { Stack, TextField, InputAdornment } from '@mui/material';

export const MuiTextField = () => {
  const [value, setValue] = useState('');
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField label='Name' variant='outlined' />
        <TextField label='Name' variant='filled' />
        <TextField label='Name' variant='standard' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label='Small secondary' variant='outlined' size='small' color='secondary' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          label='Form input'
          variant='outlined'
          value={value}
          onChange={(event) => setValue(event.target.value)}
          required
          error={!value}
          helperText={!value ? 'Required' : 'Do not share your passwprd with anyone'}
        />
        <TextField
          label='Password'
          type='password'
          variant='outlined'
          helperText='Do not share your passwprd with anyone'
        />
        <TextField label='Read only' variant='outlined' InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          label='Amount'
          InputProps={{ startAdornment: <InputAdornment position='start'>$</InputAdornment> }}
        />
        <TextField label='Weight' InputProps={{ endAdornment: <InputAdornment position='end'>kg</InputAdornment> }} />
      </Stack>
    </Stack>
  );
};
