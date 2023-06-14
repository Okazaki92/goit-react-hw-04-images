import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import styles from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

export const ImageGalleryItem = ({ id, smallImgURL, largeImgURL }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const imageOnClick = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <li className={ImageGalleryItem} onClick={imageOnClick}>
        <img
          className={styles[`ImageGalleryItem-image`]}
          src={smallImgURL}
          alt={id}
        />
      </li>
      <Modal toggler={modalIsOpen} largeImageURL={largeImgURL} />
    </>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImgURL: PropTypes.string.isRequired,
};

// export class ImageGalleryItem extends Component {
//   state = {
//     largeImageURL: "",
//     modalIsOpen: false,
//   };
//   imageOnClick = () => {
//     this.setState({
//       largeImageURL: this.props.largeImgURL,
//       modalIsOpen: !this.state.modalIsOpen,
//     });
//   };

//   render() {
//     const { modalIsOpen } = this.state;
//     return (
//       <>
//         <li className={styles.ImageGalleryItem} onClick={this.imageOnClick}>
//           <img
//             className={styles[`ImageGalleryItem-image`]}
//             src={this.props.smallImgURL}
//             alt={this.props.id}
//           />
//         </li>
//         <Modal toggler={modalIsOpen} largeImageURL={this.props.largeImgURL} />
//       </>
//     );
//   }
// }
