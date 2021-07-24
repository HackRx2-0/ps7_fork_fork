import React, { useContext, useEffect, useState } from "react";
import { DropzoneAreaBase } from "material-ui-dropzone";
import { UIContext } from "../Context/UIContext";
import { postForm } from "../APIs/Post";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  dropzone: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  root: {
    maxWidth: 345,
    height: "400px",
    width: "100%",
  },
  media: {
    height: "100%",
    width: "100%",
  },
}));

const MDropZone = () => {
  const classes = useStyles();
  const { dispatch, state } = useContext(UIContext);
  const history = useHistory();
  const theme = useTheme();

  const HandleAdd = async (files) => {
    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      console.log(files[i].file);
      formData.append("file", files[0].file);
      await dispatch({
        type: "fileAdd",
        payload: { number: Object.values(state.files).length + i },
      });
      const { result } = await postForm("/", formData);
      await dispatch({
        type: "fileRes",
        payload: {
          number: Object.values(state.files).length + i,
          result: result,
        },
      });
    }
  };

  const handleImgClick = async (i) => {
    console.log(i);
    await dispatch({
      type: "index",
      payload: i,
    });
    history.push("/editor");
  };

  return (
    <>
      <DropzoneAreaBase
        dropzoneClass={classes.dropzone}
        filesLimit={10}
        maxFileSize={300000000}
        acceptedFiles={["image/*"]}
        dropzoneText={"Drag and drop an image here or click"}
        onAdd={(newFileObjs) => {
          HandleAdd(newFileObjs);
        }}
        onDelete={(deleteFileObj) => {
          console.log("onDelete", deleteFileObj);
        }}
      />
      <Grid container style={{ marginBottom: theme.spacing(10) }} spacing={2}>
        {Object.values(state.files).map((d, i) => (
          <Grid item xs={3} key={i}>
            {/* <img
              style={{ display: "none" }}
              src={d.decoded_img}
              width='100px'
              key={i}
              height='100px'
              alt='abcs'
              onClick={(e) => {
                handleImgClick(i);
              }}
            /> */}

            <Card
              onClick={(e) => {
                handleImgClick(i);
              }}
              className={classes.root}>
              <CardActionArea style={{ height: "100%" }}>
                <CardMedia
                  className={classes.media}
                  image={d.decoded_img}
                  title='Contemplative Reptile'
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MDropZone;
