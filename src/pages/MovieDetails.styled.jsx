import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = styled(NavLink)`
  width: 200px;
  text-align: center;
  color: black;
  padding: 8px 32px;
  border: outset;
  border-radius: 8px;

  &:hover {
    color: red;
  }
`;

export const Image = styled.img`
  display: block;
`;

export const Wrapper = styled.div`
  padding: 40px 32px;
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const Title = styled.h3`
  border-top: 1px solid black;
  padding-top: 16px;
`;

export const DetailsLink = styled(NavLink)`
  color: black;
  border: outset;
  border-radius: 8px;
  padding: 8px 32px;

  &.active {
    color: red;
  }
`;
export const List = styled.ul`
  display: flex;
  gap: 20px;
`;
