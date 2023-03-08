import { useState } from 'react';

import { Stack, Avatar, Chip } from '@mui/material';

import FaceIcon from '@mui/icons-material/Face';

export const MuiChip = () => {
  const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3']);

  const handleDeelete = (chipToDelete: string) => {
    setChips((prevSate) => prevSate.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Stack direction='row' spacing={1}>
      <Chip label='Chip' color='primary' size='small' icon={<FaceIcon />} />
      <Chip label='Chip outlined' color='secondary' size='small' variant='outlined' avatar={<Avatar>V</Avatar>} />
      <Chip label='Click' color='success' size='small' onClick={() => alert('Clicked')} />
      <Chip
        label='Delete'
        color='error'
        size='small'
        onClick={() => alert('Clicked')}
        onDelete={() => alert('Delete handler called')}
      />
      {chips.map((chip) => {
        return <Chip key={chip} label={chip} size='small' onDelete={() => handleDeelete(chip)} />;
      })}
    </Stack>
  );
};
