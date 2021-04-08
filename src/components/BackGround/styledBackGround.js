import styled from "styled-components";

export const Container = styled.div`
    flex: 0.6;
    height: 95vh;
    background: url('/images/bg.png') top center / cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img`
    @media (max-width: 400px) {
        width: 200px;
    }
`;