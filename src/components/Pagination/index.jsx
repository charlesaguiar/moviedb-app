import React from 'react';
import ReactPaginate from 'react-paginate';

import { useMoviesContext } from 'contexts/MoviesContext';

import './styles.css';

const Pagination = function () {
  const [moviesContext, setMoviesContext] = useMoviesContext();

  const { totalPages, totalResults, page } = moviesContext.pagination;

  return (
    <ReactPaginate
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      breakClassName="break-me"
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={(newPage) => setMoviesContext({
        pagination: { totalPages, page: newPage.selected + 1, totalResults },
      })}
      containerClassName="pagination"
      subContainerClassName="pages pagination"
      activeClassName="active"
      forcePage={page - 1}
    />
  );
};

export default Pagination;
