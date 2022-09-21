
import * as React from 'react';

import Box from '@mui/material/Box';


import Feed from './Feed';
import { Button, Grid, Link } from '@mui/material';



export default function FeedAll() {

  return (
    <Box sx={{ display: 'flex' }}>
      <Grid>
        <Feed />
      </Grid>
    </Box >
  );
}

