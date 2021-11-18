import styled from "styled-components";
import bgDesktop from "../images/bg-header-desktop.svg";
import bgMobile from "../images/bg-header-mobile.svg";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Container>{children}</Container>
    </StyledLayout>
  );
};

const Header = styled.div`
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--primary);
  min-height: 20vh;
  @media (min-width: 900px) {
    background-image: url(${bgDesktop});
  }
`;

const StyledLayout = styled.div`
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--bg);
  min-height: 80vh;
  padding: 0 2rem;
`;

export default Layout;
