import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: rgba(49, 64, 78, 0.4);
`;

export const Form = styled.form`
    background: rgba(0, 0, 0, 0.9);
    border-radius: 10px;
    padding: 30px;
    width: 20%;

    .signup__inputContainer {
        width: 100%;
        margin: 10px 0;
    }

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        background: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Title = styled.h3`
    font-size: 26px;
`;

export const Button = styled.button`
    background: #1da1f2;
    padding: 10px;
    border: 2px solid transparent;
    color: #fff;
    font-size: 14px;
    border-radius: 30px;
    outline: 0;
    cursor: pointer;
    width: 100%;
    height: 50px;
    margin: 10px 0;
    font-weight: bold;
    text-decoration: none;
    text-align: center;

    :hover {
            background: #3cc0e1;
    }

    @media (max-width: 1000px) {
        width: 50%;
    }
`;