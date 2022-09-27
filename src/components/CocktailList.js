import React from 'react'
import styled from 'styled-components/macro';


import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../store/Context';
import cocktailsImg from './../cocktails-img.gif'
import { colors, sizes, transitions } from '../store/GlobalStyle';

const CocktailList = () => {
  const { state } = useGlobalContext();
  const { cocktails, isLoading } = state;

  if (isLoading) {
    return <Loading />
  }

  if (cocktails === null) {
    return (
      <ListWrapper>
        <h2>No cocktails matched your search criteria</h2>
        <img src={cocktailsImg} alt="cocktails-img" className="content-img" />
      </ListWrapper>
    )
  }
  return <ListWrapper>
    <h2>cocktails menu</h2>
    <div className="cocktails-wrapper">
      {cocktails.map((cocktail, index) => {
        return <Cocktail key={index} {...cocktail} />
      })}
    </div>
  </ListWrapper>
}

const ListWrapper = styled.section`
  h2{
    color: ${colors.primaryColor};
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: ${sizes.mainSpacing};
    text-align: center;
    margin-bottom: 3.5rem;
    margin-top: 3rem;
    font-weight: 700;
  }
  .content-img{
    width: 80%;
    margin: 0 auto;
    margin-bottom: 3.5rem;
  }
  .cocktails-wrapper{
  width : ${sizes.wCocktail};
  margin: 0 auto;
  max-width: ${sizes.mwCocktail};
  display: grid;
  grid-template-columns: repeat(3,1fr);
  column-gap: 1.5rem;
  row-gap: 0.75rem;
  transition: ${transitions.mainTransition};
  @media screen and (min-width: 769px) and (max-width: 1024px){
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    row-gap: 0.5rem;
  }
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    column-gap: 1rem;
    row-gap: 0.5rem;
  }
    
  }
`

export default CocktailList
