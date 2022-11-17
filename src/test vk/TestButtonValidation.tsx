import {
  Box,
  Stack,
  Grid,
  Paper,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const TestButtonValidation = () => {
  const [value, setValue] = useState("");
  // value =(event) => {
  // }

  return (
    <Paper sx={{ padding: "32px" }} elevation={5}>
      <Grid container my={2} rowSpacing={2} columnSpacing={1}>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Form Input"
            required
            value={value}
            type="number"
            onChange={(e) => setValue(e.target.value)}
            // error={!value}
            helperText={!value ? "Number" : "Only numbers [1-9], Can't be 0"}
          />
        </Stack>
      </Grid>
    </Paper>
  );
};
