import { Avatar, Grid, InputAdornment, makeStyles } from "@material-ui/core";
import { TextField, Typography, useTheme } from "@material-ui/core";
import { useField } from "formik";
import React, { useContext } from "react";
import { postWithToken } from "../APIs/Post";
import { UIContext } from "../Context/UIContext";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const useStyles = makeStyles(() => ({
  avatar: {
    "&:hover": { filter: "brightness(110%)" },
  },
}));

const Input = ({
  label,
  req,
  placeholder,
  type,

  disabled,
  ...props
}) => {
  const { state, dispatch } = useContext(UIContext);
  const theme = useTheme();
  const [feild, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const classes = useStyles();

  if (type === "avatar") {
    return (
      <>
        <TextField
          disabled={disabled}
          id="avatar"
          helperText={errorText}
          error={!!errorText}
          // {...feild}
          onChange={(e) => {
            // console.log(e.target.files[0]);
            // console.log(e);
            dispatch({
              type: "updateProfilePicture",
              payload: e.target.files[0],
            });
          }}
          inputProps={{ accept: "image/png, image/gif, image/jpeg" }}
          type="file"
          placeholder={placeholder}
          style={{ display: "none" }}
          variant="outlined"
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <label htmlFor="avatar" style={{ position: "relative" }}>
            <Avatar
              src={state.user.avatar}
              className={classes.avatar}
              style={{
                cursor: "pointer",
                border: "1px black solid",
                height: theme.spacing(12),
                width: theme.spacing(12),
              }}
            />
            {/* <IconButton
              style={{
                position: "absolute",
                background: "#1d1d1d",
                height: "32px",
                width: "32px",
                bottom: "0px",
                right: "0px",
              }}>
              <EditIcon
                color='secondary'
                fontSize='small'
                style={{ pointerEvents: "none" }}
              />
            </IconButton> */}
          </label>
        </div>
      </>
    );
  }

  if (type === "verifyEmail") {
    return (
      <>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              variant="body2"
              style={{ marginBottom: theme.spacing(1) }}
            >
              {label}
              {req ? (
                <span style={{ color: theme.palette.error.main }}>*</span>
              ) : null}
            </Typography>
          </Grid>
          {!state.user.emailVerified ? (
            <Grid item>
              <Typography
                onClick={async () => {
                  dispatch({ type: "loading", payload: true });

                  const { result } = await postWithToken(
                    "/seller/sendEmailVerificationLink",
                    {},
                  );
                  dispatch({ type: "loading", payload: false });

                  if (!result.success) {
                    dispatch({
                      type: "snackbar",
                      payload: {
                        value: true,
                        type: "error",
                        message: result.message,
                      },
                    });
                  } else {
                    dispatch({
                      type: "snackbar",
                      payload: {
                        value: true,
                        type: "success",
                        message: result.message,
                      },
                    });
                  }
                }}
                variant="body2"
                style={{
                  marginBottom: theme.spacing(1),
                  opacity: 0.6,
                  cursor: "pointer",
                }}
              >
                Send Verification Link
              </Typography>
            </Grid>
          ) : null}
        </Grid>
        <TextField
          disabled={disabled}
          helperText={errorText}
          error={!state.user.emailVerified}
          {...feild}
          type={"email"}
          InputProps={{
            endAdornment: !state.user.emailVerified ? (
              <InputAdornment
                position="start"
                style={{ color: theme.palette.error.main }}
              >
                Email not verified!
                <ErrorOutlineIcon style={{ marginLeft: theme.spacing(1) }} />
              </InputAdornment>
            ) : null,
          }}
          placeholder={placeholder}
          style={{
            width: "100%",
            marginBottom: theme.spacing(2),
            background: !state.user.emailVerified ? "#FFF6F6" : "",
            // border: !state.user.emailVerified ? `${theme.palette.error.main}` : "",
          }}
          variant="outlined"
        />
      </>
    );
  }
  // console.log(feild);
  return (
    <>
      <Typography
        variant="body2"
        style={{
          marginBottom: theme.spacing(1),
          fontWeight: 600,
        }}
      >
        {label}
        {req ? (
          <span style={{ color: theme.palette.error.main }}>*</span>
        ) : null}
      </Typography>
      <TextField
        disabled={disabled}
        helperText={errorText}
        error={!!errorText}
        {...feild}
        type={type}
        InputProps={{
          startAdornment:
            type === "tel" ? (
              <InputAdornment position="start">+91</InputAdornment>
            ) : null,
        }}
        placeholder={placeholder}
        style={{ width: "100%", marginBottom: theme.spacing(2) }}
        variant="outlined"
      />
    </>
  );
};

export default Input;
