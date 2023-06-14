import React, { Component } from "react";
import styles from "./Button.module.css";

export class Button extends Component {
  render() {
    return (
      <button
        type="button"
        onClick={this.props.onLoadMore}
        className={styles.Button}
      >
        Load more
      </button>
    );
  }
}
