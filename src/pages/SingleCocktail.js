import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../store/Context'
import Loading from '../components/Loading'
import styled from 'styled-components/macro';
import { sizes, colors, transitions, borders, shadows } from '../store/GlobalStyle';
import errorGif from './../404Gif.gif'


const SingleCocktail = () => {
  const { id } = useParams();
  const { state, fetchSingleCocktail } = useGlobalContext();
  const { isLoading } = state;

  useEffect(() => {
    fetchSingleCocktail(id);
  }, [id])

  const { singleCocktail } = state;
  if (singleCocktail) {
    const {
      strDrink: name,
      strAlcoholic: info,
      strCategory: category,
      strGlass: glass,
      strDrinkThumb: image,
      strInstructions: instructions,
      strIngredient1: ingredient1,
      strIngredient2: ingredient2,
      strIngredient3: ingredient3,
      strIngredient4: ingredient4,
      strIngredient5: ingredient5,
    } = singleCocktail;
    const ingredients = [ingredient1,
      ingredient2, ingredient3,
      ingredient4, ingredient5];
    return (
      <SingleWrapper>
        {isLoading ? <Loading /> : <SectionWrapper>
          <div className="button-wrapper">
            <Link to="/">Back home</Link>
          </div>
          <h2>{name}</h2>
          <div className="cocktail-container">
            <img src={image} alt="cocktail-img" />
            <div className="cocktail-info">
              <p className="info-content"><span>name : </span>{name}</p>
              <p className="info-content"><span>category : </span>{category}</p>
              <p className="info-content"><span>info : </span>{info}</p>
              <p className="info-content"><span>glass : </span>{glass}</p>
              <p className="info-content"><span>instructons : </span>{instructions}</p>
              <p className="info-content"><span>ingredients : </span>{ingredients.map((ingre, index) => {
                return <span className="info-content" key={index}>{ingre}</span>
              })}</p>
            </div>
          </div>
        </SectionWrapper>}

      </SingleWrapper>
    )
  }
  if (!singleCocktail) {
    return <SingleWrapper>
      <h2 className="not-found-heading">No cocktail to display</h2>
      <div className="button-wrapper">
        <Link to="/">Back home</Link>
      </div>
      <img src={errorGif} alt="not found img" />
    </SingleWrapper>
  }
}

const SingleWrapper = styled.main`
  padding: 5rem 0;
  width: ${sizes.wCocktail};
  max-width: ${sizes.mwCocktail};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
h2{
  color: ${colors.primaryColor};
  font-size: 2rem;
  text-align: center;
  letter-spacing: ${sizes.mainSpacing};
  margin: 1.5rem;
}
.not-found-heading{
  margin-bottom: 1rem;
}
.button-wrapper{
  display: flex;
  justify-content: center;
}
.cocktail-container{
  background-color: ${colors.singleColor};
  border-radius: ${borders.mainBorderRadius};
  padding: 3rem 4rem;
  box-shadow : ${shadows.lightShadow};
  @media screen and (min-width: 769px){
    display: grid;
    grid-template-columns: 4fr 3fr;
    column-gap: 1rem;
    padding:1rem 0.5rem;
  }

  img{
    border-radius: ${borders.mainBorderRadius};
    object-fit : cover;
    width: 100%;
  }
  .cocktail-info{
    margin-top: 1rem;
    letter-spacing: 2px;
    font-weight: 500;
    @media screen and (min-width: 769px){
      margin-top: 0;
    }
    .info-content{
      font-size: 1rem;
      color: ${colors.whiteColor};
      background-color: transparent;
    }
    p{
      margin-bottom: 1.2rem;
      font-size: 1rem;
      span{
        text-transform: capitalize;
        font-weight: 700;
        background-color: ${colors.grayColor};
        color: ${colors.primaryColor};
        padding: 0.25rem 0.5rem;
        border-radius: ${borders.mainBorderRadius};
        margin-right: 1rem;
      }
      span.info-content{
        margin-right: 0;
        font-weight: 500;
      }
    }
  }
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
`
const SectionWrapper = styled.section`
.button-wrapper{
  display: flex;
  justify-content:center;
}
`

export default SingleCocktail
