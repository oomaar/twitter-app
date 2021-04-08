import styled from "styled-components";

export const Container = styled.footer`
    height: 5vh;
    flex-wrap: wrap;
    display: flex;
    padding: 20px 20px 0;
    justify-content: center;
/* 
    @media (max-width: 1000px) {
        height: 19vh;
    } */

    @media (max-width: 750px) {
        display: none;
    }
`;

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const Link = styled.p`
    font-size: 14px;
    margin: 0 5px;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }

    @media (max-width: 825px) {
        font-size: 10px;
    }
`;