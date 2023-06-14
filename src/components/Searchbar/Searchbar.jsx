import React, { useState } from "react";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (evt) => {
    setQuery(evt.target.value.toLowerCase());
  };

  const handleQuerySubmit = (evt) => {
    evt.preventDefault();
    onSubmit(query);
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleQuerySubmit}>
        <button type="submit" className={styles[`SearchForm-button`]}>
          <span className={styles[`SearchForm-button-label`]}>Search</span>
        </button>

        <input
          onChange={handleQueryChange}
          className={styles[`SearchForm-input`]}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// export class Searchbar extends Component {
//   state = {
//     query: "",
//   };

//   handleQueryChange = (evt) => {
//     this.setState({ query: evt.target.value.toLowerCase() });
//   };
//   handleQuerySubmit = (evt) => {
//     evt.preventDefault();
//     this.props.onSubmit(this.state.query);
//   };

//   render() {
//     return (
//       <header className={styles.Searchbar}>
//         <form className={styles.SearchForm} onSubmit={this.handleQuerySubmit}>
//           <button type="submit" className={styles[`SearchForm-button`]}>
//             <span className={styles[`SearchForm-button-label`]}>Search</span>
//           </button>

//           <input
//             onChange={this.handleQueryChange}
//             className={styles[`SearchForm-input`]}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }
