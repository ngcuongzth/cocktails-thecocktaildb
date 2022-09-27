import React from 'react'
import styled, { keyframes } from 'styled-components/macro'
import { colors } from './../store/GlobalStyle'

const Loading = () => {
 return (
    <LoadingWrapper/>
 )
}

const spinner = keyframes`
    to{
        transform: rotate(360deg);
    }
`

const LoadingWrapper = styled.div`
    width: 15rem;
    height: 15rem;
    border: 5px solid ${colors.grayColor};
    border-radius: 50%;
    border-top-color: ${colors.primaryColor};
    margin: 10rem auto 0 auto;
    animation: ${spinner} 0.6s linear infinite;
`
export default Loading
