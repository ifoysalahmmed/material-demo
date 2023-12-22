import { Box } from "@mui/material";

const MuiBoxLayout = () => {
  return (
    <>
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
        Foysal Ahmmed Limon
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        color="whitesmoke"
        p={2}
      >Foysal Ahmmed Limon</Box>
    </>
  );
};

export default MuiBoxLayout;
