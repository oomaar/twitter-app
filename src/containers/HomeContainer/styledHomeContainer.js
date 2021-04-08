import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SubContainer = styled.div`
    display: flex;

    @media (max-width: 1000px) {
        flex-direction: column-reverse;
    }
`;