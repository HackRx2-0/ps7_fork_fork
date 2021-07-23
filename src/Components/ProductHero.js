import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";

import ProductHeroLayout from "./ProductHeroLayout";
import { Button, Typography } from "@material-ui/core";
import backgroundImage from "../Assets/Hero.jpg";
import PublishIcon from "@material-ui/icons/Publish";
import { postForm } from "../APIs/Post";
import { UIContext } from "../Context/UIContext";
import { useHistory } from "react-router-dom";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#d0bcaf", // Average color of the background image.
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;
  const { dispatch } = useContext(UIContext);
  const history = useHistory();

  const handleChange = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    // console.log("sssss");
    dispatch({ type: "loading", payload: true });
    const { result } = await postForm("/", formData);
    console.log(result, "wwwwwwwhewhiuewewgi");
    await dispatch({ type: "SET_IMAGE", payload: result });
    dispatch({ type: "loading", payload: false });

    history.push("/editor");
  };

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Documents
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Enjoy Best in class ML & AI technology and transform your documents.
      </Typography>

      <input
        accept="image/*"
        className={classes.input}
        style={{ display: "none" }}
        id="1"
        multiple
        type="file"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <label htmlFor="1">
        <Button
          component="span"
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          endIcon={<PublishIcon />}
        >
          Upload Image
        </Button>
      </label>

      <Typography variant="body2" color="inherit" className={classes.more}>
        Experience the Magic
      </Typography>
    </ProductHeroLayout>
  );
}

export default withStyles(styles)(ProductHero);
