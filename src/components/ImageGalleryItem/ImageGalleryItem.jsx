import React, { Component } from "react";
import { Modal } from "../Modal/Modal";
import styles from "./ImageGalleryItem.module.css";

export class ImageGalleryItem extends Component {
  state = {
    largeImageURL: "",
    modalIsOpen: false,
  };
  imageOnClick = () => {
    this.setState({
      largeImageURL: this.props.largeImgURL,
      modalIsOpen: !this.state.modalIsOpen,
    });
  };

  render() {
    const { modalIsOpen } = this.state;
    return (
      <>
        <li className={styles.ImageGalleryItem} onClick={this.imageOnClick}>
          <img
            className={styles[`ImageGalleryItem-image`]}
            src={this.props.smallImgURL}
            alt={this.props.id}
          />
        </li>
        <Modal toggler={modalIsOpen} largeImageURL={this.props.largeImgURL} />
      </>
    );
  }
}
