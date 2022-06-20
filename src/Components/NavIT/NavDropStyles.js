import styled from "styled-components";

export const NavItemnew = styled.li`
display:flex;
justify-content:center;
align-items:center;
height:35px;

`


export const NavLinksnew = styled.div`
  color: ${({ scrollNav }) => (scrollNav ? '#fff' : `#000`)};
  display: flex;
  align-items:right;
  text-decoration: none;
  font-weight:500;
  font-size:1rem;

  height: 100%;
  cursor: pointer;

  &.active {
    color: #101010;
  }

`;
