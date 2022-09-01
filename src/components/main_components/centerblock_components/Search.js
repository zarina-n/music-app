import React from "react";
import { StyledSearch, SearchSvg, SearchInput } from "./Centerblock.styled";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

function Search() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <StyledSearch>
      <SearchSvg>
        {darkTheme ? (
          <svg>
            <use xlinkHref="img/icon/sprite.svg#icon-search" />
          </svg>
        ) : (
          <svg>
            <use xlinkHref="img/icon/sprite.svg#icon-search-light" />
          </svg>
        )}{" "}
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
