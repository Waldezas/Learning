import { Stack, Rating } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoritBorderIcon from '@mui/icons-material/FavoriteBorder'


export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(
    null
  ); /*type can be number or null. Specified type in useState */
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  console.log({ value });
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize='inherit' color='error'/>}
        emptyIcon={<FavoritBorderIcon fontSize='inherit'/>}
        /*highlightSelectedOnly
        readOnly*/
      />
    </Stack>
  );
};
