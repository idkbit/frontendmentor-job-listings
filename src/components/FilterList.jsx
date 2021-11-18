import styled from "styled-components";
import { Button } from "../styles";
import cross from "../images/icon-remove.svg";

const FilterList = ({ filters, setFilters }) => {
  const onFilterDelete = (key, value) => {
    if (key === "role") {
      setFilters({ ...filters, [key]: "" });
      return;
    }
    if (key === "level") {
      setFilters({ ...filters, [key]: "" });
      return;
    }

    setFilters({ ...filters, [key]: filters[key].filter((v) => v !== value) });
  };
  if (
    !filters.role &&
    !filters.level &&
    !filters.tools.length &&
    !filters.languages.length
  )
    return null;

  const resetFilters = () => {
    setFilters({ role: "", level: "", tools: [], languages: [] });
  };
  return (
    <FilterContainer>
      <div>
        {Object.entries(filters).map(([key, value]) => {
          if (!value || value.length === 0) return null;
          if (typeof value === "string")
            return (
              <div key={value}>
                <LookLikeButton className="looklikebtn">{value}</LookLikeButton>
                <button onClick={() => onFilterDelete(key, value)}>
                  <img src={cross} alt="" />
                </button>
              </div>
            );

          return value.map((v) => (
            <div key={v}>
              <LookLikeButton className="looklikebtn">{v}</LookLikeButton>
              <button onClick={() => onFilterDelete(key, v)}>
                <img src={cross} alt="" />
              </button>
            </div>
          ));
        })}
      </div>
      <button onClick={resetFilters}>Clear</button>
    </FilterContainer>
  );
};

const LookLikeButton = styled(Button).attrs({
  as: "span",
})`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  &:hover {
    background-color: var(--btn);
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--card);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0px var(--btn);
  align-items: center;
  & > div {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  & > div > div {
    display: flex;
    &:hover > .looklikebtn {
      background-color: var(--primary);
      color: var(--card);
    }
  }
  div > button {
    border: none;
    padding: 0.52rem;
    background-color: var(--primary);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: var(--vdgc);
    }
  }

  & > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    color: var(--dgc);
    transition: color 0.3s ease;
    &:hover {
      color: var(--primary);
      text-decoration: underline;
    }
  }
`;

export default FilterList;
