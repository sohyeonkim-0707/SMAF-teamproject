// import { useEffect, useState } from "react";
import { UploadButton, UploadFileHidden, UploadImage } from "./Upload01.styles";
// import { IUploads01UIProps } from "./Uploads01.types";

export default function Uploads01UI(props: any) {
  console.log(props.fileUrl);

  return (
    <>
      {props.fileUrl ? (
        <UploadImage onClick={props.onClickUpload} src={props.fileUrl} />
      ) : (
        <UploadButton onClick={props.onClickUpload}></UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
