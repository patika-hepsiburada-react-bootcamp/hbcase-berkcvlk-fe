import { useFilters, useQueries } from "hooks";
import Filter from "./Filter/Filter";
import * as S from "./Sidebar.styled";

const Sidebar = () => {
  const { filters } = useFilters();
  const { color, order, brand } = useQueries();

  return (
    <S.Sidebar>
      {filters.map((filter, index) => (
        <Filter
          key={index}
          filter={filter}
          activeStates={[color, order, brand][index]}
        />
      ))}
    </S.Sidebar>
  );
};

export default Sidebar;
