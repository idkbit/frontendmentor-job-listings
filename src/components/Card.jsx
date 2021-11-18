import styled from "styled-components";
import { Button } from "../styles";

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
  filters,
  setFilters,
}) => {
  const onFilterClick = (key, value) => {
    console.log(key, value);
  };
  return (
    <StyledCard featured={featured}>
      <div className="wrapper">
        <div className="image-container">
          <img src={logo} alt={`${company} logo.`} />
        </div>
        <div>
          <div className="container">
            <div className="row">
              <h2>{company}</h2>
              {isNew && <span className="new">new!</span>}
              {featured && <span className="featured">featured</span>}
            </div>

            <h3 className="position">{position}</h3>
            <div className="details">
              <span>{postedAt}</span>
              <span className="bullet"> &bull;</span>
              <span>{contract}</span>
              <span className="bullet"> &bull;</span>
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>
      <div className="skills">
        <Button onClick={() => onFilterClick("role", role)}>{role}</Button>
        <Button onClick={() => onFilterClick("level", level)}>{level}</Button>
        {languages.map((l) => (
          <Button onClick={() => onFilterClick("languages", l)} key={l}>
            {l}
          </Button>
        ))}
        {tools.map((l) => (
          <Button onClick={() => onFilterClick("tools", l)} key={l}>
            {l}
          </Button>
        ))}
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.article`
  background-color: var(--card);
  box-shadow: 0 0 10px 1px var(--btn);
  padding: 2rem;
  border-radius: 5px;
  position: relative;
  border-left: 5px solid
    ${(props) => (props.featured ? "var(--primary)" : "transparent")};
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    .wrapper {
      display: flex;
    }
  }

  .image-container {
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 2rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (min-width: 900px) {
      position: static;
      width: auto;
      height: auto;
      img {
        width: auto;
        height: auto;
        object-fit: none;
      }
    }
  }

  h2 {
    color: var(--primary);
    font-size: 0.9375rem;
    font-weight: 700;
  }

  .position {
    color: var(--vdgc);
  }

  button {
    cursor: pointer;
    transition: all 0.2s ease;
    &:active {
      transform: translateY(2px);
    }
  }

  .row {
    display: flex;
    align-items: center;
  }

  .container {
    @media (min-width: 900px) {
      margin-left: 2rem;
    }
  }

  .new {
    display: inline-block;
    background-color: var(--primary);
    color: var(--card);
    padding: 0.3rem 0.4rem;
    text-transform: uppercase;
    border-radius: 30px;
    margin: 0 0.5rem;
    font-size: 0.8rem;
  }

  .featured {
    display: inline-block;
    background-color: var(--vdgc);
    color: var(--card);
    padding: 0.3rem 0.4rem;
    border-radius: 30px;
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  .position {
    margin-top: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      color: var(--primary);
    }
  }

  .details {
    margin-top: 1rem;
    span {
      color: var(--dgc);
    }
  }

  .bullet {
    margin: 0 0.5rem;
  }

  .divider {
    height: 1px;
    background-color: var(--vdgc);
    margin: 1rem 0;

    @media (min-width: 900px) {
      display: none;
    }
  }

  .skills {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export default Card;
