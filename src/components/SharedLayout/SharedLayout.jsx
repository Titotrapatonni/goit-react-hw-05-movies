import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Container, Header, HeaderNavLink, Nav } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <Nav>
          <HeaderNavLink to="/">Home</HeaderNavLink>
          <HeaderNavLink to="/movies">Movies</HeaderNavLink>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
