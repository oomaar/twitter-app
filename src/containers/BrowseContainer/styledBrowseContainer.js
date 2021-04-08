import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 10px;

    @media (max-width: 750px) {
        flex-direction: column;
        padding: 0;
    }
`;