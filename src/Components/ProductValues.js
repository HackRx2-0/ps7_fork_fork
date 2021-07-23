import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import productValues1 from "../Assets/productValues1.svg";
import productValues2 from "../Assets/productValues2.svg";
import productValues3 from "../Assets/productValues3.svg";
import Lines from "../Assets/Lines.png";

const styles = (theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img src={Lines} className={classes.curvyLines} alt="curvy lines" />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={productValues1}
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography variant="h5" align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent consequat ut risus id semper. Cras tincidunt erat nec
                maximus vestibulum. Integer risus est, suscipit ac semper a,
                ultrices vitae nisl.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={productValues2} alt="graph" />
              <Typography variant="h6" className={classes.title}>
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography variant="h5" align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent consequat ut risus id semper. Cras tincidunt erat nec
                maximus vestibulum. Integer risus est, suscipit ac semper a,
                ultrices vitae nisl.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={productValues3} alt="clock" />
              <Typography variant="h6" className={classes.title}>
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography variant="h5" align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent consequat ut risus id semper. Cras tincidunt erat nec
                maximus vestibulum. Integer risus est, suscipit ac semper a,
                ultrices vitae nisl.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
