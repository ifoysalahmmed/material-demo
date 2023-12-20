import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const MuiTextField = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [value, setValue] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Stack spacing={4}>
      {/* Input Variants */}
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      {/* Input Size & Color */}
      <Stack spacing={2} direction="row">
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>

      {/* Form Prop Types */}
      <Stack spacing={2} direction="row">
        <TextField label="Form Input" required />
        <TextField label="Email" type="email" disabled />
        <TextField
          label="Password"
          type="password"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
        />
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>

      {/* Prefix & Suffix */}
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
