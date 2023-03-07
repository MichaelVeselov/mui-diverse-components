import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label='breadcrumb'
        maxItems={3}
        itemsAfterCollapse={2}
        separator={<NavigateNextIcon fontSize='small' />}
      >
        <Link href='#' underline='hover'>
          Home
        </Link>
        <Link href='#' underline='hover'>
          Catalog
        </Link>
        <Link href='#' underline='hover'>
          Accessories
        </Link>
        <Link href='#' underline='hover'>
          New collection
        </Link>
        <Typography color='text.primary'>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};
