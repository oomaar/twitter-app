import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background: #15202b;

    @media (max-width: 1000px) {
        flex-direction: column-reverse;
    }
`;