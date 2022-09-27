import React, { useEffect } from 'react'
import styled from 'styled-components/macro'

// import file module
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import Loading from '../components/Loading';
import { useGlobalContext } from '../store/Context';
const Home = () => {
  const { state, fetchCocktails, searchByNameAPI } = useGlobalContext();
  const { isLoading } = state;
  useEffect(() => {
    fetchCocktails(searchByNameAPI)
  }, [searchByNameAPI])

  return (
    <main>
      <SearchForm />
      {isLoading ? <Loading /> : <HomeWrapper>
        <CocktailList />
      </HomeWrapper>}
    </main>
  )
}

const HomeWrapper = styled.main`
  .search-form{
    @media screen and (max-width: 876px){
      visibility: hidden;
    }
  }
`

export default Home
