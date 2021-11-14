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
  return (
    <StyledCard featured={featured}>
      <div className="image-container">
        <img src={logo} alt={`${company} logo.`} />
      </div>
      <div>
        <div className="container">
          <h2>{company}</h2>
          {isNew && <button className="new">new!</button>}
          {featured && <button className="featured">featured</button>}
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
    </StyledCard>
  );
};

const StyledCard = styled.article`
  background-color: var(--card);
  padding: 2rem;
  border-radius: 5px;
  position: relative;
  border-left: 5px solid
    ${(props) => (props.featured ? "var(--primary)" : "transparent")};
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
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
    @media (min-width: 600px) {
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

  button {
    cursor: pointer;
    transition: all 0.2s ease;
    &:active {
      transform: translateY(2px);
    }
  }

  .container {
    @media (min-width: 600px) {
      margin-left: 2rem;
    }
  }

  .new {
    border: none;
    background-color: var(--primary);
    color: var(--card);
    padding: 0.3rem 0.4rem;
    text-transform: uppercase;
    border-radius: 10px;
    font-weight: 700;
    margin-right: 0.5rem;
  }

  .featured {
    border: none;
    background-color: var(--vdgc);
    color: var(--card);
    padding: 0.3rem 0.4rem;
    border-radius: 10px;
    text-transform: uppercase;
    font-weight: 700;
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
`;

export default Card;
