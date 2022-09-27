import React from 'react'
import styled from 'styled-components/macro'
import { colors, sizes, borders, shadows, transitions } from '../store/GlobalStyle'
import { useGlobalContext } from '../store/Context'
import { CHANGE_SEARCH_KEY } from '../store/Actions'
const SearchForm = () => {
  const { state, dispatch, fetchCocktails, searchByNameAPI } = useGlobalContext();
  const { searchKeywords } = state;

  return (
    <SearchWrapper>
      <FormWrapper className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" name="name" id="name" value={searchKeywords}
            onChange={(e) => {
              dispatch({
                type: CHANGE_SEARCH_KEY,
                payload: e.target.value
              })
              fetchCocktails(`${searchByNameAPI}${searchKeywords}`);
            }} />
        </div>
      </FormWrapper>
    </SearchWrapper>
  )
}
const FormWrapper = styled.form`
    width: 85vw;
    max-width: ${sizes.mwSearch};
    margin: 0 auto;
    background: ${colors.whiteColor};
    padding: 2rem 2.5rem;
    text-transform: capitalize;
    border-radius: ${borders.mainBorderRadius};
    box-shadow: ${shadows.lightShadow};
    transition: ${transitions.mainTransition};
    .form-control{
      display:flex;
      flex-direction: column;
      label{
        color: ${colors.primaryColor};
        letter-spacing: 0.2rem;
        font-weight: 600;
        margin-bottom: 1.25rem;
      }
      input{
        background-color : ${colors.grayColor};
        border: 1px solid ${colors.bgLi};
        border-radius: ${borders.mainBorderRadius};
        padding: 0.5rem;
        font-size: 1.2rem;
        font-weight: 500;
        color: ${colors.primaryColor};
        letter-spacing: 0.15rem;
        
        &:focus{
          outline: 2px solid ${colors.primaryColor};
        }
      }
    }
`


const SearchWrapper = styled.section`
  padding: 5rem 0;
  margin-top: 1rem;
  padding-bottom: 0;
  @media screen and (max-width: 768px){
    display: none;
  }
`

export default SearchForm
export { FormWrapper, SearchWrapper }
