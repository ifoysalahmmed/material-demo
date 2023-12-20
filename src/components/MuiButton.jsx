import { Button } from "@mui/material";

const MuiButton = () => {
  return (
    <div style={{ display: "flex", gap: "30px", justifyContent: "center" }}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};

export default MuiButton;
