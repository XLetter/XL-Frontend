import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background: #d9d9d9;
  height: 60px;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 0.5rem calc((100vw - 1120px) / 2);
  z-index: 10;
  outline: black 2px solid;
  width: 1120px;
  left: 400px;
  top: 0px;
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-widht: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1rem;
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
  margin-right: 12px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Nav_Btn_1 = styled.nav`
  display: inline-block;

  margin-right: 418px @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtn_1Link = styled(Link)`
  border-radius: 4px;

  background: #cccccc;
  box-shadow: inset -1px -1px 0px #000000, inset 1px 1px 0px #ffffff, inset -2px -2px 0px #808080,
    inset 2px 2px 0px #dbdbdb;
  padding: 10px 22px;
  color: #000;
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
