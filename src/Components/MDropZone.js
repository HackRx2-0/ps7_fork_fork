import React, { useCallback, useContext } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { UIContext } from "../Context/UIContext";
import { postForm } from "../APIs/Post";

const MDropZone = () => {
  const { dispatch } = useContext(UIContext);
  const handlePreviewIcon = (fileObject, classes) => {
    return <div>wsmndwndiwkmn</div>;
  };
  return (
    <DropzoneArea
      // showPreviews='true'
      filesLimit={10}
      maxFileSize={300000000}
      acceptedFiles={["image/*"]}
      dropzoneText={"Drag and drop an image here or click"}
      onChange={(files) => console.log("Files:", files)}
      getPreviewIcon={handlePreviewIcon}
    />
  );
};

export default MDropZone;
