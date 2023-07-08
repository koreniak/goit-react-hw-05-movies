import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  padding: 16px 8px;
  margin-bottom: 8px;
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavigationLink = styled(NavLink)`
  padding: 4px;
  margin: 12px;
  color: #2E2F42;

  &.active {
    color: #4D5AE5;
    font-weight: 500;
  }
`;