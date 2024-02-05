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

export const handleAllDataSelectedRecord = (
  e: any,
  toggleProduct: any,
  setToggleProduct: any,
  records: any
) => {
  if (e === "all") {
    if (toggleProduct.length) {
      if (toggleProduct.length === records.length) {
        setToggleProduct([]);
      } else {
        // setToggleProduct(state.tableData.data);
        setToggleProduct(records);
      }
    } else {
      setToggleProduct(records);
    }
  } else {
    const result: any = toggleProduct.includes(e)
      ? toggleProduct.filter((item: any) => item?.id !== e.id)
      : [...toggleProduct, e];
    setToggleProduct(result);
  }
};
