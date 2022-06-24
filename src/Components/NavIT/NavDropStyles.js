import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
export const NavItemnew = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  width: 100%;
`;

export const NavLinksnew = styled.div`
  color: ${({ scrollNav }) => (scrollNav ? '#fff' : `#000`)};
  display: flex;
  align-items: right;
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  width: 100%;

  height: 100%;
  cursor: pointer;

  &.active {
    color: #101010;
  }
`;
