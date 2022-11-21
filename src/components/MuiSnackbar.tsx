import { Snackbar, Button, Alert, AlertProps } from "@mui/material";
import { useState, forwardRef } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // first is event or just event which is not needed by the function,
  // second is reason, which populates based on the event (is of type : string)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Form submitten successfully!"
        autoHideDuration={4000}
        open={open} //open value assigns to prop 'open'
        onClose={handleClose} //on close event
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      /> */}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Form submitted successfuly!
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};
