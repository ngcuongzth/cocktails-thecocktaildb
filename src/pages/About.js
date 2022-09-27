import React from "react";
import styled from "styled-components/macro";
import { colors, transitions, sizes } from "./../store/GlobalStyle";
import { Link } from 'react-router-dom';
import { borders } from "./../store/GlobalStyle";
const About = () => {

  return (
    <AboutWrapper>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repudiandae architecto qui adipisci in officiis, aperiam sequi atque
        perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
        nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione
        hic aspernatur error blanditiis?
      </p>
      <div className="link-wrapper">
        <Link to="/">Back home</Link>
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  padding: 5rem 0;
  margin: 0 auto;
  width: ${sizes.wAbout};
  max-width: ${sizes.mwAbout};
  h1 {
    color: ${colors.primaryColor};
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: ${sizes.mainSpacing};
    text-align: center;
    margin-bottom: 3.5rem;
    margin-top: 1rem;
    font-weight: 600;
  }
  p{
    line-height: 2rem;
    font-weight: 400;
    letter-spacing : 3px;
    margin-bottom: 1.25rem;
    color: ${colors.primaryColor};
    text-align: justify;
  }
  .link-wrapper{
    display:flex;
    justify-content: center;
    margin-top: 2rem;
  }
  a{
    background-color: ${colors.primaryColor};
   color : ${colors.whiteColor};
   transition : ${transitions.mainTransition};
   text-transform: uppercase;
   letter-spacing: ${sizes.mainSpacing};
   font-weight: 300;
   padding: 0.45rem 0.8rem;
   text-decoration: none;
   border-radius : ${borders.mainBorderRadius};
   display: inline-block;
   font-size: 0.8rem;
   &:hover{
     cursor: pointer;
     color: ${colors.primaryColor};
     background-color: ${colors.grayColor};
   }
  }
    
`;
export default About;
