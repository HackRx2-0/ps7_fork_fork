import React from "react";
import { DropzoneArea } from "material-ui-dropzone";

const handlePreviewIcon = (fileObject, classes) => {
  // const { type } = fileObject.file;
  const iconProps = {
    className: classes.image,
  };
  return <div {...iconProps}>jjjj</div>;
};

const MDropZone = () => {
  return (
    <DropzoneArea
      // showPreviews='true'
      filesLimit='10'
      maxFileSize='	300000000'
      acceptedFiles={["image/*"]}
      dropzoneText={"Drag and drop an image here or click"}
      onChange={(files) => console.log("Files:", files)}
      getPreviewIcon={handlePreviewIcon}
    />
  );
};

export default MDropZone;
