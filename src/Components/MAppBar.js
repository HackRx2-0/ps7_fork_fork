import React, { useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { UIContext } from "../Context/UIContext";
import { post } from "../APIs/Post";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { dispatch, state } = useContext(UIContext);

  const handleSave = async () => {
    dispatch({ type: "loading", payload: true });
    var docDefinition = {
      content: [],
    };
    for (let i = 0; i < Object.values(state.files).length; i++) {
      docDefinition.content.push({
        image: state.files[i].decoded_img,
        // width: 150,
        height: 300,
      });
    }
    console.log(docDefinition);
    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.getBase64(async (data) => {
      const { result } = await post("/save", {
        pdf: data,
      });
    });
    dispatch({ type: "loading", payload: false });
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {/* <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'>
            <MenuIcon />
          </IconButton> */}
          <Typography variant='h6' color='inherit' className={classes.title}>
            Documate
          </Typography>
          {props.save ? (
            <Button
              color='secondary'
              variant='contained'
              size='large'
              style={{
                paddingLeft: theme.spacing(4),
                paddingRight: theme.spacing(4),
              }}
              onClick={handleSave}>
              Save
            </Button>
          ) : (
            <Button color='inherit'>Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
