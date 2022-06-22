import { FaBars } from 'react-icons/fa';
import { NavLink as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: ${({ scrollNav }) => (scrollNav ? '#e0e0e0' : '#e6e6e626')};

  // height: 90px;
  //  margin-top:-80px
  // background-color:#fff;
  width: 100%;
  margin-top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 29;
  // padding: 0.5rem calc((100vw - 1000px) / 2);
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    margin-top: 0px;
    justify-content: start;
    width: 100%;
    position: relative;
  }

  /* Third Nav */
  /* justify-content: flex-start; */
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    margin-top: 0px;
    width: 20%;
    justify-content: start;
  }
`;
export const NavLogo = styled(LinkR)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;

  justify-content: start;
  font-size: 1.5\rem;
  display: flex;
  align-items: flex-start;
  margin-left: 2px;
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-width: 768px) {
  }
  img {
    height: '92px';
    @media screen and (max-width: 480px) {
      height: '42px';
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: 768px) {
      height: '20px';
      width: '10px';
    }
  }
  &.active {
    color: #ffff;
  }
`;
export const NavLink = styled(LinkR)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  &.active {
    color: #fff;
  }
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #900;
  }
  &.active {
    color: #15cdfc;
  }
  @media screen and (max-width: 768px) {
    dispaly: none;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  color: #000;
  @media screen and (max-width: 1024px) {
    display: block;

    position: absolute;
    right: 0;
    top: 0.5rem;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    /* background-color: #fff; */
    color: #000;
    &.active {
      color: #000;
    }
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  // width:110%;
  list-style: none;
  text-align: center;
  margin-right: -1px;
  @media screen and (max-width: 768px) {
    dispaly: none;
  }
`;

export const NavItem = styled.li`
  display: block;
  height: 45px;
  padding: 0 2rem;

  color: #000;

  @media only screen and (max-width: 1280px) {
    padding: 0 0.5rem;
  }
  @media only screen and (max-width: 1600px) {
    padding: 0 0.8rem;
  }

  @media only screen and (max-width: 1080px) {
    padding: 0 0.1rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
  // &:hover {
  // }
  // @keyframes pulse {
  //   0% {
  //     height: 20px;
  //     background-color: #2f7dbd;
  //   }
  //   100% {
  //     height: 80px;
  //   }
  // }
`;
export const NavLinks = styled.div`
  color: ${({ scrollNav }) => (scrollNav ? '#fff' : `#000`)};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;

  height: 100%;
  cursor: pointer;
  // font-size:18px;

  &.active {
    color: #101010;
  }
  &:hover {
    // font-weight: 500;
    border-bottom: 2px solid #ffab53 !important;
  }
  &.active {
    border-bottom: 2px solid #ffab53 !important;
  }
`;
export const NavLinksA = styled.a`
  color: ${({ scrollNav }) => (scrollNav ? '#fff' : `#000`)};
  display: flex;
  align-items: center;
  text-decoration: none;

  height: 100%;
  cursor: pointer;
  // font-size:18px;

  &.active {
    color: #101010;
  }
  &:hover {
    font-weight: 500;
    border-bottom: 2px solid #ffab53 !important;
  }
  &.active {
    border-bottom: 2px solid #ffab53 !important;
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 85%);
    font-size: 1rem;
    cursor: pointer;
    &.active {
      color: #000;
    }
  }
`;

// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: -24px;

//   /* Second Nav */
//   /* margin-right: 24px; */

//   /* Third Nav */
//   /* width: 100vw;
//   white-space: nowrap; */

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

export const NavBtn = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 25px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #ed1c24;
  padding: 10px 22px;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  color: #000;
  outline: none;
  border: none;

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
  }
`;
