import React, { useState } from "react";

const PageSizeFilter = () => {
  const [pageSize, setPageSize] = useState(10);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pageSizeFilter">
      <p className="pageSizeFilter__text">
        Page size: &nbsp;
        <span
          className="pageSizeFilter__button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {pageSize}
          <div
            className={
              isOpen
                ? "open pageSizeFilter__button-triangle"
                : "pageSizeFilter__button-triangle"
            }
          ></div>
        </span>
      </p>
      {isOpen && (
        <div className="pageSizeFilter__menu">
          <p>20</p>
          <p>50</p>
          <p>100</p>
        </div>
      )}
    </div>
  );
};

export default PageSizeFilter;
