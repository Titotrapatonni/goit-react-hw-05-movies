import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  min-height: 100vw;

  align-items: center;
  padding: 32px;
  margin: 40px auto;
  border: outset;
  border-radius: 8px;
  background-color: #d9d9d9bc;
`;

export const Header = styled.header`
  height: 40px;
  border-bottom: 1px solid black;
  padding-left: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const HeaderNavLink = styled(NavLink)`
  color: black;
  &.active {
    color: red;
  }
`;
