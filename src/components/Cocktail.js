import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { sizes, colors, shadows, transitions, borders } from '../store/GlobalStyle'
const Cocktail = ({ strDrinkThumb: image, strDrink: name, idDrink: id, strAlcoholic: info, strGlass: glass }) => {
  return (
    <CocktailWrapper>
      <header className="cocktail-header">
        <img src={image} alt={name} />
      </header>
      <footer className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktails/${id}`}>Details</Link>
      </footer>
    </CocktailWrapper>
  )
}

const CocktailWrapper = styled.article`
 background: ${colors.bgLi};
  margin-bottom: 2rem;
  box-shadow: ${shadows.itemShadow};
  transition: ${transitions.mainTransition};
  border-radius: ${borders.mainBorderRadius};
  header{
    img{
      width: 100%;
      border-top-left-radius: ${borders.mainBorderRadius};
      border-top-right-radius: ${borders.mainBorderRadius};
      height: 18rem;
      object-fit: cover;
    }
  }
  footer{
    padding: 1.5rem;
    h3{
      font-size: 2rem;
      margin-bottom: 0.3rem;
      color: ${colors.primaryColor};
    }
    h4{
      color: ${colors.blackColor};
      font-size: 1rem;
      font-weight: 700;
      text-transform: capitalize;
      margin-bottom: 0.3rem;
   
    }
    p{
      font-size: 1rem;
      font-weight: 400;
      text-transform: capitalize;
      margin-bottom: 0.3rem;
      color: ${colors.infoColor};
      font-style: italic;
      letter-spacing: 0.1rem;
     
    }
    h3, h4  {
      letter-spacing: ${sizes.mainSpacing};
    }
    a{
      text-decoration:  none;
      padding: 0.25rem 0.4rem;
      background-color: ${colors.primaryColor};
      box-shadow:${shadows.lightShadow};
      text-transform: uppercase;
      color: ${colors.grayColor};
      border-radius: ${borders.mainBorderRadius};
      font-size: 0.75rem;
      letter-spacing: ${sizes.mainSpacing};
      margin-top: 0.5rem;
      display: inline-block;
      transition: ${transitions.mainTransition};
      font-weight: 300;
  
      &:hover{
        color:  ${colors.primaryColor};
        background-color: ${colors.grayColor};
      }
    }
  }
`

export default Cocktail
