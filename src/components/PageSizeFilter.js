import React from "react";
import { connect } from "react-redux";
import { setPageSize } from "../actions";

const PageSizeFilter = ({ pageSize, setPageSize, isLoading }) => {
  const pageSizeOptions = [10, 20, 50, 100];

  const changePageSize = () => {
    const pageSize = document.querySelector("#pageSizes").value;
    setPageSize(pageSize);
    localStorage.setItem("pageSize", pageSize);
  };

  const pageSizeOptionsList = pageSizeOptions.map((pageSize) => {
    return (
      <option value={pageSize} id={pageSize} key={pageSize}>
        {pageSize}
      </option>
    );
  });

  return (
    <div className="pageSizeFilter">
      <label htmlFor="pageSizes">Max page size: </label>
      <select
        name="pageSizes"
        id="pageSizes"
        className="pageSizeFilter__select"
        onChange={changePageSize}
        value={pageSize}
        disabled={isLoading ? true : false}
      >
        {pageSizeOptionsList}
      </select>
    </div>
  );
};

//redux
const mapStateToProps = (state) => {
  const { pageSize } = state;
  return { pageSize };
};

const mapDispatchToProps = (dispatch) => ({
  setPageSize: (pageSize) => dispatch(setPageSize(pageSize)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageSizeFilter);
