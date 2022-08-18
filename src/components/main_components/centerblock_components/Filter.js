import React from "react";
import { StyledFilter, FilterTitle } from "../../../styles/Centerblock.styled";
import FilterButtons from "./FilterButtons";

function Filter() {
  return (
    <StyledFilter>
      <FilterTitle>Искать по:</FilterTitle>
      <FilterButtons />
    </StyledFilter>
  );
}

export default Filter;
