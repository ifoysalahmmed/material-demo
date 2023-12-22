import { Rating, Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

const MuiRating = () => {
  const [value, setValue] = useState(null);

  console.log({ value });

  return (
    <Stack spacing={2}>
      <Rating
        size="large"
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" color="warning" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        highlightSelectedOnly
      />

      <Rating
        size="large"
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" color="warning" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        readOnly
      />
    </Stack>
  );
};

export default MuiRating;
