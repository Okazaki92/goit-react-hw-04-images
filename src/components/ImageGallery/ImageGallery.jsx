import React from "react";
import { nanoid } from "nanoid";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

export const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className={styles.ImageGallery}>
        {images.map((image) => {
          return (
            <ImageGalleryItem
              key={nanoid()}
              id={image.id}
              smallImgURL={image.webformatURL}
              largeImgURL={image.largeImageURL}
            />
          );
        })}
      </ul>
    </>
  );
};

// export class ImageGallery extends Component {
//   state = {
//     modalIsOpen: false,
//     largeImageURL: "",
//   };
//   openModal = (image) => {
//     this.setState({
//       modalIsOpen: true,
//       largeImageURL: image.largeImageURL,
//     });
//   };

//   render() {
//     return (
//       <>
//         <ul className={styles.ImageGallery}>
//           {this.props.images.map((image) => {
//             return (
//               <ImageGalleryItem
//                 key={nanoid()}
//                 id={image.id}
//                 smallImgURL={image.webformatURL}
//                 largeImgURL={image.largeImageURL}
//               />
//             );
//           })}
//         </ul>
//       </>
//     );
//   }
// }
