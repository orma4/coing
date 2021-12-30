import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import ImagesService, { Image } from "../services/images.service";
import { toast } from "react-toastify";
import ImagesList from "./components/ImagesList";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsLoading(true);
    ImagesService.getImages()
      .then((res) => {
        setImages(res);
      })
      .catch(() => toast.error("קרתה תקלה"))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Coing</h1>
        <button onClick={handleOnClick} className={styles.button}>
          Load Images
        </button>
      </header>
      <ImagesList images={images} isLoading={isLoading} />
      <ToastContainer />
    </div>
  );
};

export default Home;
