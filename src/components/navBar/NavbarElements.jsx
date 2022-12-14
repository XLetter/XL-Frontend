import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  position: relative;
  display: flex;
  width: 1120px;
  height: 60px;

  margin: auto;

  background: #d9d9d9;

  justify-content: center;

  z-index: 10;
`;

// Nav: outline: black 2px solid;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;

  width: 100px;
  height: 100%;
  cursor: pointer;

  margin-left: 20px;

  text-decoration: none;
  text-align: center;
  font-family: w95fa;

  &.active {
    color: #ed497b;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 1120px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 0.7rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 8px;

  @media screen and (max-width: 1120px) {
    display: none;
  }
`;
export const Nav_Btn_1 = styled.nav`
  display: inline-block;
  position: absolute;
  left: 90%;

  margin-right: 400px @media screen and (max-width: 1120px) {
    display: none;
  }
  align-items: center;
  margin-top: 2%;
  font-size: 15px;
  height: 20px;
`;
export const NavBtn_1Link = styled(Link)`
  border-radius: 4px;

  background: #cccccc;
  box-shadow: inset -1px -1px 0px #000000, inset 1px 1px 0px #ffffff, inset -2px -2px 0px #808080,
    inset 2px 2px 0px #dbdbdb;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #000;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  font-family: 'W95FA';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 12px;
  /* identical to box height, or 75% */
  text-align: center;

  /* Black */
  color: #000000;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const NavBtnLink = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 70%;
  overflow: hidden;

  border-radius: 70%;
  margin-right: 10px;

  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
