import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Image } from "../../services/images.service";
import styles from "../../styles/ImagesList.module.css";
import ImageCard from "./ImageCard";

interface props {
  images: Image[];
  isLoading: boolean;
}

const ImagesList = ({ images, isLoading }: props) => {
  return (
    <div className={styles.list}>
      {isLoading ? (
        <h1>isLoading...</h1>
      ) : (
        images.map(({ title, id, src }, i) => (
          <ImageCard numbering={i + 1} key={id} title={title} src={src} />
        ))
      )}
    </div>
  );
};

export default ImagesList;
