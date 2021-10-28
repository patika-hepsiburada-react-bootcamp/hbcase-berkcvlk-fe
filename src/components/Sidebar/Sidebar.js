import { useFilters, useQueries } from "hooks";
import Filter from "./Filter/Filter";
import * as S from "./Sidebar.styled";

const Sidebar = () => {
  const { filters } = useFilters();
  const { color, order, brand, resetFilters } = useQueries();

  return (
    <S.Sidebar>
      {filters.map((filter, index) => (
        <Filter
          key={index}
          filter={filter}
          activeStates={[color, order, brand][index]}
        />
      ))}
      {[color, brand, order].join("").trim() && (
        <S.RemoveAllFilters onClick={resetFilters}>
          Hepsini Kaldır
        </S.RemoveAllFilters>
      )}
    </S.Sidebar>
  );
};

export default Sidebar;
