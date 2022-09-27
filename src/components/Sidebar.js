import React from 'react'
import styled, { css } from 'styled-components/macro';
import { colors, shadows, transitions } from '../store/GlobalStyle';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import { FaBars, FaTimes, FaHome, FaInfo } from "react-icons/fa";

import { FormWrapper, SearchWrapper } from './SearchForm';
import {
    CHANGE_SEARCH_KEY, OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from '../store/Actions';
import { useGlobalContext } from './../store/Context';


const Sidebar = () => {
    const { dispatch, state } = useGlobalContext();
    const { searchKeywords, sidebarIsOpen } = state;


    return (
        <SidebarWrapper className={
            sidebarIsOpen ? "sidebarOpen sidebar" : "sidebar"
        }>
            <span className="bar-container" >
                <FaBars className="bar-button" onClick={() => {
                    dispatch({
                        type: OPEN_SIDEBAR
                    })
                }} />
            </span>
            <div className="sidebar-wrapper">
                <div className="close-wrapper">
                    <FaTimes onClick={() => {
                        dispatch({
                            type: CLOSE_SIDEBAR
                        })
                    }} />
                </div>
                <Link to="/" onClick={() => {
                    dispatch({
                        type: CLOSE_SIDEBAR
                    })
                }}>
                    <img src={logo} alt="logo" />
                </Link>
                <ul>
                    <li className="sidebar-list">
                        <Link to="/" onClick={() => {
                            dispatch({
                                type: CLOSE_SIDEBAR
                            })
                        }}>
                            <FaHome />
                            Home</Link>
                    </li>
                    <li className="sidebar-list">
                        <Link to="/about" className="aboutNavigate">
                            <FaInfo />
                            About</Link>
                    </li>
                </ul>
                <SidebarSearch>
                    <FormSidebar small>
                        <div className="form-control">
                            <label htmlFor="name">search your favorite cocktail</label>
                            <input type="text" name="name" id="name" value={searchKeywords}
                                onChange={(e) => {
                                    dispatch({
                                        type: CHANGE_SEARCH_KEY,
                                        payload: e.target.value
                                    })
                                }} />
                        </div>
                    </FormSidebar>
                </SidebarSearch>
            </div>
        </SidebarWrapper>
    )
}
const FormSidebar = styled(FormWrapper)`
    ${(props) => {
        const { small } = props;
        return small && css`
        width: 80%;
        label{
            font-size: 1rem ;
        }
        input{
            font-size: 1rem !important;
        }
        `
    }}
`
const SidebarWrapper = styled.section`
    &.sidebarOpen{
        width: 40%;
        .sidebar-wrapper{
            transform: translateX(0%);
        }
        .bar-container{
            display: none;
        }
         box-shadow : ${shadows.rightShadow};
        background-color : ${colors.grayColor};
    }
    
    & .bar-container{
        display: flex;
        margin-top : 1rem;
        justify-content: center;
        .bar-button{
            @media screen and (max-width: 480px){
                font-size: 1rem;
            }
              font-size: 1.5rem;
                    color: ${colors.primaryColor};
                    cursor: pointer;
                    transition: ${transitions.mainTransition};
                    &:hover{
                        cursor: pointer;
                        font-size: 1.6rem;
                    }
        }
    }
    overflow: hidden;
    box-shadow: unset;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: transparent;
    width: 50%;
    transform: translateX(-100%);
    transition: ${transitions.mainTransition};
    width: 5%;
    @media screen and (max-width: 768px){
        transform: translateX(0%);
    }

    .sidebar-wrapper{
          transform: translateX(-900%);
        .close-wrapper{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 1.5rem;
            svg{
                font-size: 1.5rem;
                color: ${colors.primaryColor};
                transition: ${transitions.mainTransition};
                &:hover{
                    cursor: pointer;
                    font-size: 1.6rem;
                }
            }
        }
        a{
            
            text-decoration: none;
            color: ${colors.primaryColor};
            display: block;
        }
        &> a{
            margin: 2rem 0;
            img{
               max-width: 90%;
                margin: 0 auto;
                width: 12rem;
            }
        }
        ul{
            width: 90%;
            margin: 0 auto;
            list-style-type: none;
            li{
                display: flex;
                align-items: flex-start;
                justify-content: center;
                width: 12rem;
                max-width: 100%;
                margin: 1rem auto;
                
                padding: 1rem 2rem;
                background-color: ${colors.bgLi};
                border-radius: 15px;
                a{
                    font-size: 1.2rem;
                    display: flex;
                    align-items: center;
                    transition: ${transitions.mainTransition};
                    svg{
                        color: ${colors.primaryColor};
                        font-size: 1.5rem;
                        margin-right: 10px;
                    }
                    &:hover{
                        font-weight: 700;
                    }
                }
            }
        }
    }

`

const SidebarSearch = styled(SearchWrapper)`
    padding: 3rem 0;
    display: block;
    form{
        padding: 1rem 1.5rem;
    }
`

export default Sidebar;
