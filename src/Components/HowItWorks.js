import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Button, Typography } from "@material-ui/core";
import Lines from "../Assets/Lines.png";
import PublishIcon from "@material-ui/icons/Publish";
import Works1 from "../Assets/Works1.svg";
import Works2 from "../Assets/Works2.svg";
import Works3 from "../Assets/Works3.svg";
import { postForm } from "../APIs/Post";
// import { Link } from "react-router-dom";

const styles = (theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    overflow: "hidden",
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

const handleChange = async (e) => {
  const formData = new FormData();
  formData.append("file", e.target.files[0]);
  // console.log("sssss");
  const { result } = await postForm("/", formData);
  console.log(result, "wwwwwwwhewhiuewewgi");
};

function HowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img src={Lines} className={classes.curvyLines} alt="curvy lines" />
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <img src={Works1} alt="suitcase" className={classes.image} />
                <Typography variant="h5" align="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent consequat ut risus id semper. Cras tincidunt erat nec
                  maximus vestibulum. Integer risus est, suscipit ac semper a,
                  ultrices vitae nisl.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <img src={Works2} alt="graph" className={classes.image} />
                <Typography variant="h5" align="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent consequat ut risus id semper. Cras tincidunt erat nec
                  maximus vestibulum. Integer risus est, suscipit ac semper a,
                  ultrices vitae nisl.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <img src={Works3} alt="clock" className={classes.image} />
                <Typography variant="h5" align="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent consequat ut risus id semper. Cras tincidunt erat nec
                  maximus vestibulum. Integer risus est, suscipit ac semper a,
                  ultrices vitae nisl.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <input
          accept="image/*"
          className={classes.input}
          style={{ display: "none" }}
          id="2"
          multiple
          type="file"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label htmlFor="2">
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
      </Container>
    </section>
  );
}

HowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HowItWorks);
