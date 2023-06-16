import React, { useState, useEffect } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
import { getGallery } from "../api/getGallery";
import styles from "./App.module.css";

export const App = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [totalImages, setTotalImages] = useState(0);

  const loadGallery = async () => {
    setIsLoading(true);
    const data = await getGallery(query, page);
    setPage(page);
    setGallery(data.hits);
    setIsLoading(false);
    setTotalImages(data.total);
  };

  const loadMoreGallery = async () => {
    setIsLoading(true);
    const data = await getGallery(query, page);
    setGallery((prevState) => [...prevState, ...data.hits]);
    setIsLoading(false);
    setTotalImages(data.total);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const submitQuery = (query) => {
    if (query === "") {
      loadGallery();
    }
    setQuery(query);
    setIsLoading(true);
    setPage(1);
  };

  useEffect(() => {
    if (query !== "") {
      loadGallery();
    }
  }, [query]);

  useEffect(() => {
    if (page !== 1) {
      loadMoreGallery();
      setPage(page);
    }
  }, [page]);

  return (
    <div className="container">
      <Searchbar onSubmit={submitQuery} />
      <ImageGallery images={gallery} />
      {gallery.length === 0 && (
        <div className={styles.noImages}>Sorry no Images Found</div>
      )}
      {totalImages > gallery.length && <Button onLoadMore={handleLoadMore} />}
      {isLoading && <Loader />}
    </div>
  );
};
