import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

// creating an array for Autocomplete options
const skills = ["HTML", "CSS", "JavaScript", "React", "Redux"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutocomplete = () => {
  const [value, setValue] = useState(null);

  console.log({ value });

  const [skill, setSkill] = useState(null);

  console.log({ skill });

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        freeSolo
      />

      {/* Instead of returning value, return an object with id & label */}
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(e, newValue) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
