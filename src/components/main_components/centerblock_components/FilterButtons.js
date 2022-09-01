import { useState, useCallback } from "react";
import { FilterButton, FilterOptions } from "./Centerblock.styled";
import FILTER_DATA from "../../../dummy-data/filter-data";

function FilterButtons() {
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
          id={id}
          clickedId={clickedId}
          key={id}
          onClick={() => stateToggler(id)}
        >
          {filterBy}

          <FilterOptions id={id} clickedId={clickedId} key={options.option}>
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
