import React, { useContext } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { UIContext } from "../Context/UIContext";
import { AlertTitle } from "@material-ui/lab";
import { Typography } from "@material-ui/core";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  icon: { fontSize: "24px" },
  cross: { alignItems: "start" },
  // message: { paddingTop: "5px" },
}));

export default function Notif() {
  const classes = useStyles();
  const { state, dispatch } = useContext(UIContext);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch({
      type: "snackbar",
      payload: {
        value: false,
        type: "",
        message: "",
      },
    });
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={state?.snackbar?.value}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={state?.snackbar?.type || "error"}
          classes={{
            icon: classes.icon,
            // message: classes.message,
            action: classes.cross,
          }}
        >
          <AlertTitle>
            <Typography variant="h5" style={{ textTransform: "capitalize" }}>
              {state?.snackbar?.type}
            </Typography>
          </AlertTitle>
          <Typography variant="h6">{state?.snackbar?.message}</Typography>
        </Alert>
      </Snackbar>
    </>
  );
}
