import React, { Component } from "react";
import FsLightbox from "fslightbox-react";

export class Modal extends Component {
  render() {
    return (
      <>
        <FsLightbox
          toggler={this.props.toggler}
          sources={[`${this.props.largeImageURL}`]}
        />
      </>
    );
  }
}
