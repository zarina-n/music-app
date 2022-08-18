import React from "react";
import {
  StyledSearch,
  SearchSvg,
  SearchInput,
} from "../../../styles/Centerblock.styled";

function Search() {
  return (
    <StyledSearch>
      <SearchSvg>
        <use href="img/icon/sprite.svg#icon-search"></use>
      </SearchSvg>
      <SearchInput
        placeholder="Поиск"
        name="search"
        type="search"
      ></SearchInput>
    </StyledSearch>
  );
}

export default Search;
