import styled from "styled-components";

const Card = ({
  job: {
    company,
    new: isNew,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
}) => {
  return <StyledCard featured={featured}>{company}</StyledCard>;
};

const StyledCard = styled.div`
  background-color: var(--card);
  padding: 2rem;
  border-radius: 5px;
  border-left: 5px solid
    ${(props) => (props.featured ? "var(--primary)" : "transparent")};
`;

export default Card;
