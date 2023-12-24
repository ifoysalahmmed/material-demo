import { Box, Grid } from "@mui/material";

const MuiGridLayout = () => {
  return (
    <Grid container my={4} rowSpacing={2} columnSpacing={1}>
      {/* <Grid container my={4} spacing={2}> */}
      <Grid item xs={3}>
        <Box bgcolor="primary.light" p={2}>
          Item 1
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Box bgcolor="primary.light" p={2}>
          Item 2
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Box bgcolor="primary.light" p={2}>
          Item 3
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box bgcolor="primary.light" p={2}>
          Item 4
        </Box>
      </Grid>
    </Grid>
  );
};

export default MuiGridLayout;
