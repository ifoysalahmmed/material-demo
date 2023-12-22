import { Box, Divider, Stack } from "@mui/material";

const MuiStackLayout = () => {
  return (
    // Stack is one dimensional layout. Either vertical or horizontal
    <Stack
      sx={{ border: "1px solid" }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Material UI
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        color="whitesmoke"
        p={2}
      >
        Material UI
      </Box>
    </Stack>
  );
};

export default MuiStackLayout;
