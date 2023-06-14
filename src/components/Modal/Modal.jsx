import React from "react";
import FsLightbox from "fslightbox-react";

export const Modal = ({ toggler, largeImageURL }) => {
  return (
    <>
      <FsLightbox toggler={toggler} sources={[`${largeImageURL}`]} />
    </>
  );
};
