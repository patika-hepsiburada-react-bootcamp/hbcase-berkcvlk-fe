import { useEffect, useState } from "react";

import { useQueries } from "hooks";
import * as S from "./Search.styled";

const Search = () => {
  const [localSearch, setLocalSearch] = useState("");
  const { setSearch } = useQueries();

  useEffect(() => {
    if (!localSearch || localSearch.length < 2) {
      return;
    }

    // Give a time between each key stroke
    const setSearchTimeout = setTimeout(() => setSearch(localSearch), 300);

    return () => clearTimeout(setSearchTimeout);
  }, [localSearch]);

  const searchChangeHandler = (event) => {
    setLocalSearch(event.target.value);
  };

  return (
    <S.Wrapper>
      <S.SearchIcon />
      <S.Input
        onChange={searchChangeHandler}
        value={localSearch}
        placeholder="25 milyon'dan fazla ürün içerisinde ara"
      />
    </S.Wrapper>
  );
};

export default Search;
