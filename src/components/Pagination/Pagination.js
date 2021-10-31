import { useEffect } from "react";

import { usePagination } from "hooks";
import * as S from "./Pagination.styled";

const Pagination = () => {
  const { page, setPage, pageCount, totalProductCount, productPerPage } =
    usePagination();

  /**
   * Filter changes can make total page number
   * smaller than current page. When this happen set page to the first
   */
  useEffect(() => {
    if (page > pageCount) {
      setPage(1);
    }
  }, [page, pageCount]);

  /**
   * No need for pagination when total item count smaller than product
   * per page
   */
  if (productPerPage >= totalProductCount) {
    return null;
  }

  const previousPageHandler = () => {
    if (page === 1) {
      return;
    }

    setPage((prev) => prev - 1);
  };

  const nextPageHandler = () => {
    if (page === pageCount) {
      return;
    }

    setPage((prev) => prev + 1);
  };

  return (
    <S.Pagination>
      <S.PaginateButton onClick={previousPageHandler}>{"<"}</S.PaginateButton>
      <S.Pages>
        {pageCount
          ? [...Array(pageCount)].map((_, index) => (
              <S.PaginateButton
                key={index}
                onClick={() => setPage(index + 1)}
                isActive={page === index + 1}
                data-testid="pageBtn"
              >
                {index + 1}
              </S.PaginateButton>
            ))
          : null}
      </S.Pages>
      <S.PaginateButton onClick={nextPageHandler}>{">"}</S.PaginateButton>
    </S.Pagination>
  );
};

export default Pagination;
