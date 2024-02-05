import { useState } from "react";
export const TableHeader = ({
  columns,
  records,
  handleAllDataSelectedRecords,
  toggleProduct,
  showSelectBox,
  getSortingData,
  tableAllData,
}: any) => {
  const initialSortConfig = columns.reduce((acc: any, column: any) => {
    if (column?.sortable) {
      acc[column?.accessor] = { key: column?.accessor, direction: "asc" };
    }
    return acc;
  }, {});
  const [sortConfig, setSortConfig] = useState(initialSortConfig);
  const handleSort = (key: string) => {
    const direction = sortConfig[key].direction === "asc" ? "desc" : "asc";
    const newSortConfig = { ...sortConfig, [key]: { key, direction } };
    console.log(key);
    const resultData =
      tableAllData?.length &&
      [...tableAllData]?.sort((a: any, b: any) => {
        if (direction === "asc") {
          return a[key] > b[key] ? 1 : -1;
        } else if (direction === "desc") {
          return a[key] < b[key] ? 1 : -1;
        }
        return 0;
      });
    getSortingData(resultData);
    setSortConfig(newSortConfig);
  };
  const descendingAscendingOrder = (e: any) => {
    let result;

    // if (e === "descending") {
    //   result = [...state.tableData.data].sort((a: any, b: any) =>
    //     a.name.localeCompare(b.name)
    //   );
    // } else if (e === "ascending") {
    //   result = [...state.tableData.data].sort((a: any, b: any) =>
    //     b.name.localeCompare(a.name)
    //   );
    // }
    // const updateResult = { ...state.tableData.tableTitle };
    // const descendingOrder = {
    //   data: result,
    //   tableTitle: updateResult,
    // };
    // store.dispatch(updateTableData(descendingOrder));
  };
  return (
    <thead>
      <tr>
        {/* columns header html code  */}
        {showSelectBox && (
          <th>
            <input
              type="checkbox"
              checked={toggleProduct.length === records.length}
              onChange={() => {
                handleAllDataSelectedRecords("all");
              }}
            />
          </th>
        )}
        {columns.map((column: any, index: any) => {
          return (
            <th
              key={index}
              onClick={() => column.sortable && handleSort(column?.accessor)}>
              {column?.title}
              {column.sortable && (
                <span className="cursor-pointer">
                  {sortConfig[column.accessor].key === column.accessor && (
                    <span>
                      {sortConfig[column.accessor].direction === "asc" ? (
                        <span
                          onClick={() => handleSort(column.accessor)}
                          className={` sorted duration-1000 transition-all ease-linear ${
                            sortConfig[column.accessor].key === column.accessor
                              ? "sorted"
                              : ""
                          }`}>
                          ▲
                        </span>
                      ) : (
                        <span
                          onClick={() => handleSort(column.accessor)}
                          className="duration-1000 transition-all ease-linear sorted">
                          ▼
                        </span>
                      )}
                    </span>
                  )}
                </span>
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
