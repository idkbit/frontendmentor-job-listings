import styled from "styled-components";
import bgDesktop from "../images/bg-header-desktop.svg";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Container>{children}</Container>
    </StyledLayout>
  );
};

const Header = styled.div`
  background-image: url(${bgDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--primary);
  min-height: 20vh;
`;

const StyledLayout = styled.div`
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--bg);
  min-height: 80vh;
`;

export default Layout;
