export const handlePageChanges = (
  page: any,
  totalPage: any,
  pageNumber: any,
  setPage: any
) => {
  if (pageNumber === "prev") {
    setPage(page <= 1 ? 1 : page - 1);
  } else if (pageNumber === "next") {
    setPage(page == totalPage ? totalPage : page + 1);
  } else if (pageNumber === "...") {
    setPage(1);
  } else {
    setPage(pageNumber);
  }
};
