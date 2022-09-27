import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro';
import errorSvg from './../404Gif.gif'
import { colors, transitions, borders } from '../store/GlobalStyle'
const Error = () => {
  return (
    <ErrorWrapper>
      <img src={errorSvg} alt="" />
      <div>
        <Link to="/">Back to home</Link>
      </div>
    </ErrorWrapper>
  )
}

const ErrorWrapper = styled.section`
  width: 85vw;
  margin: 3rem auto;

  img{
    margin: 2rem auto;
    width: 60%;
  }
  div{
    a{
      text-decoration: none;
      color: ${colors.whiteColor};
      text-transform: uppercase;
      font-size: 0.8rem;
      padding: 0.45rem 0.8rem;
      display: inline-block;
      background-color: ${colors.primaryColor};
      transition: ${transitions.mainTransition};
      border-radius: ${borders.mainBorderRadius};
      box-shadow: ${borders.mainBoxShadow};

      &:hover{
        background-color: ${colors.grayColor};
        color: ${colors.primaryColor};
      }
    }
    display: flex;
    align-items:center;
    justify-content: center;
  }
`
export default Error
