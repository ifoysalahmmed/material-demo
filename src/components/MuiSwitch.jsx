import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Switch,
} from "@mui/material";
import { useState } from "react";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);

  console.log({ checked });

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  const [cities, setCities] = useState([]);

  console.log({ cities });

  const handleCitiesChange = (e) => {
    const index = cities.indexOf(e.target.value);

    if (index === -1) {
      setCities([...cities, e.target.value]);
    } else {
      setCities(cities.filter((city) => city !== e.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Dark mode"
          control={
            <Switch color="warning" checked={checked} onChange={handleChange} />
          }
        />
      </Box>
      <Box>
        <FormControl error={cities.length < 1}>
          <FormLabel>City</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="Dhaka"
              control={
                <Switch
                  color="secondary"
                  value="dhaka"
                  checked={cities.includes("dhaka")}
                  onChange={handleCitiesChange}
                />
              }
            />
            <FormControlLabel
              label="Delhi"
              control={
                <Switch
                  color="secondary"
                  value="delhi"
                  checked={cities.includes("delhi")}
                  onChange={handleCitiesChange}
                />
              }
            />
            <FormControlLabel
              label="Mumbai"
              control={
                <Switch
                  color="secondary"
                  value="mumbai"
                  checked={cities.includes("mumbai")}
                  onChange={handleCitiesChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>
            {cities.length < 1 ? "Select at least one city" : ""}
          </FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiSwitch;
