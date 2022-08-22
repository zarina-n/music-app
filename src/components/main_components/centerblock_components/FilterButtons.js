import { useState, useCallback } from "react";
import { FilterButton, FilterOptions } from "./Centerblock.styled";
import FILTER_DATA from "../../../dummy-data/filter-data";

function FilterButtons(id) {
  const [clickedId, setClickedId] = useState(0);

  const stateToggler = useCallback(
    (id) => {
      setClickedId((prevId) => (prevId === id ? null : id));
    },
    [setClickedId]
  );

  return (
    <>
      {FILTER_DATA.map(({ filterBy, id, options }) => (
        <FilterButton
          clickedId={clickedId}
          key={id}
          onClick={() => stateToggler(id)}
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
