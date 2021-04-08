import styled from "styled-components";

export const Container = styled.div``;

export const Background = styled.div`
    pointer-events: none;
    z-index: 0;

    @media (max-width: 1000px) {
        display: none;
    }
`;