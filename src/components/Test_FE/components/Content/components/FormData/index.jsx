import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function FormData() {
  return (
    <>
      <h6>Khung thông tin chi tiết</h6>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />

          </Grid>
          <Grid item xs={6}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />

          </Grid>
          <Grid item xs={6}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />

          </Grid>
          <Grid item xs={6}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />

          </Grid>
        </Grid>
      </Box>
    </>

    // <Box
    //   component="form"
    //   sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
    //   noValidate
    //   autoComplete="off"
    // >
    //   <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    //   <TextField id="filled-basic" label="Filled" variant="filled" />
    //   <TextField id="standard-basic" label="Standard" variant="standard" />
    // </Box>
  );
}
