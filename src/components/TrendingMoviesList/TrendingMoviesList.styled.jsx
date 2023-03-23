import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Item = styled.li`
  padding: 8px;
  padding-left: 20px;
  border: outset;
  border-radius: 8px;
`;

export const MovieLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &:hover {
    color: red;
  }
`;
