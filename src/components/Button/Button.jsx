import React from "react";
import styles from "./Button.module.css";
import propTypes from "prop-types";

export const Button = ({ onLoadMore }) => {
  return (
    <button type="button" onClick={onLoadMore} className={styles.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onLoadMore: propTypes.func,
};
