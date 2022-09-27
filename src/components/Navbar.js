import React from 'react'
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom'

import logo from '../logo.svg'
import { colors, sizes, transitions, shadows } from '../store/GlobalStyle';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="nav-wrapper">
        <Link to="/">
          <img src={logo} alt="the-cocktail-shop" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </div>
    </NavbarWrapper>
  )
}
const NavbarWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    background-color: ${colors.whiteColor};
    border-bottom: 2px solid ${colors.borderColor};
    box-shadow: ${shadows.lightShadow};
    transition: ${transitions.mainTransition};
    @media screen and (max-width: 768px){
      visibility: hidden;
      transform: translateY(-100%)
    }

    .nav-wrapper{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: ${sizes.wHeader};
      max-width: ${sizes.mwHeader};
      a{
        text-decoration: none;
        color: ${colors.blackColor};
        &{
          img{
            width: 12rem;
          }
        }
        &:hover{
          cursor: pointer;
        }
      }
      ul{
        list-style: none;
        display: flex;
        align-items: center;
        a{
          text-transform: capitalize;
          display: inline-block;
          font-weight: 400;
          letter-spacing: 2px;
          font-size: 1.2rem;
          padding: 0.25rem 0.5rem;
          transition: ${transitions.mainTransition};
          &:hover{
            color: ${colors.primaryColor};
            font-weight: 700;
          }
        }   
      }
    }
`

export default Navbar
