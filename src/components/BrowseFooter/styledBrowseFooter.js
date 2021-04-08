import styled from "styled-components";

export const Container = styled.div`
    display: none;
    flex-direction: column;

    @media (max-width: 750px) {
        display: flex;
    }
`;

export const IconsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0 0;
`;

export const IconContainer = styled.div`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;