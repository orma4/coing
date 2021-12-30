import React, { useState } from "react";
import styles from "../../styles/ImageCard.module.css";

interface props {
  numbering: number;
  title: string;
  src: string;
}

const ImageCard = ({ numbering, title, src }: props) => {
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <div className={`${styles.card} ${isError && styles.error}`}>
      <h1 className={styles.numbering}>{numbering}</h1>
      <img
        src={src}
        alt={title}
        className={styles.image}
        onError={() => {
          setIsError(true);
        }}
      />
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default ImageCard;
