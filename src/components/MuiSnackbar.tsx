import { useState, forwardRef } from 'react';

import { Snackbar, Button, Alert, AlertProps } from '@mui/material';

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/*       <Snackbar
        open={open}
        message='Form submitted successfully!'
        autoHideDuration={4 * 1000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      /> */}
      <Snackbar open={open} autoHideDuration={6 * 1000} onClose={handleClose}>
        <SnackbarAlert severity='success' onClose={handleClose}>
          Form submitted successfully!
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};
