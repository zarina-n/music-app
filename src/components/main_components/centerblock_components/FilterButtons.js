import { useState } from "react";
import styled from "styled-components";
import FILTER_DATA from "../../../dummy-data/filter-data";

function FilterButtons() {
  const [clickedId, setClickedId] = useState(0);

  return (
    <>
      {FILTER_DATA.map(({ filterBy, id, options }) => (
        <FilterButton
          clickedId={clickedId}
          key={id}
          onClick={() => setClickedId((prevId) => (prevId === id ? null : id))}
          style={{
            color: clickedId === id ? "#ad61ff" : "#ffffff",
            borderColor: clickedId === id ? "#ad61ff" : "#ffffff",
          }}
        >
          {filterBy}

          <FilterOptions
            key={options.option}
            style={{ visibility: clickedId === id ? "visible" : "hidden" }}
          >
            {options.map(({ option, optionId }) => (
              <li key={optionId}>{option}</li>
            ))}
          </FilterOptions>
        </FilterButton>
      ))}
    </>
  );
}

export default FilterButtons;

const FilterButton = styled.button`
  font-style: normal;
  font-size: 16px;
  border: 1px solid;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;
  background-color: #181818;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
`;

const FilterOptions = styled.ul`
  position: absolute;
  background: #313131;
  color: #ffffff;
  font-size: 20px;
  border-radius: 12px;
  width: 424px;
  height: 138px;

  left: 0;
  top: 30px;
  padding: 36px 34px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 28px;
  column-gap: 20px;

  display: -webkit-box;
  display: -ms-flexbox;
  -ms-flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-column-gap: 20px;
  -webkit-font-feature-settings: "pnum" on, "lnum" on;
  font-feature-settings: "pnum" on, "lnum" on;

  li:first-child {
    -webkit-text-decoration-line: underline;
    text-decoration-line: underline;
    color: #b672ff;
  }
`;
