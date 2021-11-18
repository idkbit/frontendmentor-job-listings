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
  return (
    <FilterContainer>
      {Object.entries(filters).map(([key, value]) => {
        if (!value || value.length === 0) return null;
        console.log(key, value);
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
  gap: 1rem;
  & > div {
    display: flex;
    &:hover > .looklikebtn {
      background-color: var(--primary);
      color: var(--card);
    }
  }
  button {
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
`;

export default FilterList;
