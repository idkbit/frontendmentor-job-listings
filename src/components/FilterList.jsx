import styled from "styled-components";
import { Button } from "../styles";
import cross from "../images/icon-remove.svg";

const FilterList = ({ filters, setFilters }) => {
  const onFilterDelete = (filter) => {
    setFilters(filters.filter((f) => f !== filter));
  };
  return (
    <FilterContainer>
      {filters.map((filter) => (
        <div key={filter}>
          <LookLikeButton className="looklikebtn">{filter}</LookLikeButton>
          <button onClick={() => onFilterDelete(filter)}>
            <img src={cross} alt="" />
          </button>
        </div>
      ))}
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
