import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");

  console.log(country);

  const [countries, setCountries] = useState([]);

  console.log(countries);

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const handleMultipleChange = (e) => {
    const value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="500px" display="flex" gap="20px">
      {/* Single Select */}
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
        size="small"
        color="secondary"
        error={!country}
        helperText={!country ? "Please select a country" : ""}
      >
        <MenuItem value="BD">Bangladesh</MenuItem>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="CN">China</MenuItem>
      </TextField>

      {/* Multi Select */}
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleMultipleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
      >
        <MenuItem value="BD">Bangladesh</MenuItem>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="CN">China</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
