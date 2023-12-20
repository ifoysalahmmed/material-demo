import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component={"h1"} gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>

      {/* for body means p tag the default value is body1. so we can skip the variant */}

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit
        illum adipisci voluptatem totam officiis libero perspiciatis similique
        nisi iure reiciendis cumque nihil omnis consectetur rem, corrupti, magni
        aspernatur hic!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit
        illum adipisci voluptatem totam officiis libero perspiciatis similique
        nisi iure reiciendis cumque nihil omnis consectetur rem, corrupti, magni
        aspernatur hic!
      </Typography>
    </div>
  );
};

export default MuiTypography;
