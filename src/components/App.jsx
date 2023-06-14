import React, { useState, useEffect } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
import { getGallery } from "../api/getGallery";

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
      {totalImages > gallery.length && <Button onLoadMore={handleLoadMore} />}
      {isLoading && <Loader />}
    </div>
  );
};

// export class App extends Component {
//   state = {
//     page: 1,
//     query: "",
//     gallery: [],
//     per_page: 12,
//     isLoading: false,
//     totalImages: 0,
//   };

//   loadGallery = async () => {
//     this.setState({ isLoading: true });
//     let { query, page } = this.state;
//     const data = await getGallery(query, (page = 1));
//     this.setState({
//       page,
//       gallery: data.hits,
//       isLoading: false,
//       totalImages: data.total,
//     });
//   };

//   loadMoreGallery = async () => {
//     this.setState({ isLoading: true });
//     const { query, page } = this.state;
//     const data = await getGallery(query, page);

//     this.setState((prevState) => ({
//       gallery: [...prevState.gallery, ...data.hits],
//       isLoading: false,
//       totalImages: data.total,
//     }));
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     if (prevState.query !== this.state.query) {
//       await this.loadGallery();
//     }

//     if (
//       this.state.page !== prevState.page &&
//       prevState.query === this.state.query
//     ) {
//       this.loadMoreGallery();
//       this.setState({ page: this.state.page });
//     }
//   }

//   handleLoadMore = () => {
//     this.setState((prevState) => ({
//       page: 1 + prevState.page,
//     }));
//   };

//   submitQuery = (query) => {
//     if (query === "") {
//       this.loadGallery();
//     }
//     this.setState({ query, isLoading: true, page: 1 });
//   };

//   render() {
//     const { gallery, isLoading, totalImages } = this.state;
//     return (
//       <div className="container">
//         <Searchbar onSubmit={this.submitQuery} />
//         <ImageGallery images={gallery} />
//         {totalImages > gallery.length && (
//           <Button onLoadMore={this.handleLoadMore} />
//         )}
//         {isLoading && <Loader />}
//       </div>
//     );
//   }
// }
