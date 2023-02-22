import { useState } from 'react';

import { Stack, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(2);
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size='large'
        icon={<FavoriteIcon fontSize='inherit' color='error' />}
        emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
        max={6}
      />
    </Stack>
  );
};
