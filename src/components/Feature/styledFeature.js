import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    flex: 0.4;
    padding: 20px;
`;

export const HomeForm = styled.form`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const InputContainer = styled.div`
    position: relative;
    max-width: 600px;
    width: 30%;
    height: 70px;
    margin: 0 10px;
`;


export const Label = styled.label`
    color: rgb(136, 153, 166);
    pointer-events: none;
    position: absolute;
    left: 5px;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 14px;
`;

export const Span = styled.span`
    transition: all 0.1s ease;
    position: absolute;
    top: 30%;
    left: 2%;
`;

export const Input = styled.input`
    background: transparent;
    padding: 10px 10px 0;
    outline-width: 0;
    height: 100%;
    width: 100%;
    border: 0;
    font-size: 18px;
    border: 2px solid rgb(136, 153, 166);
    border-radius: 5px;
    color: rgb(136, 153, 166);

    &:focus {
        border: 2px solid #1da1f2;
    }

    &:focus + ${Label} ${Span} {
        transform: translateY(-100%);
        font-size: 12px;
        left: 1%;
        color: #1da1f2;
    }

    &:valid + ${Label} ${Span} {
        transform: translateY(-100%);
        font-size: 12px;
        left: 1%;
    }

    &:required {
        
    }
`;

export const LoginButton = styled.button`
    background: transparent;
    padding: 5px;
    border: 2px solid #1da1f2;
    color: #1da1f2;
    font-size: 14px;
    border-radius: 30px;
    outline: 0;
    cursor: pointer;
    margin: 0 0 0 10px;
    width: 120px;
    height: 50px;
    font-weight: bold;

    :hover {
        background: #162d40;
    }
`;

export const SubContainer = styled.div`
    @media (max-width: 1000px) {
        display: flex;
        justify-content: center;
    }
`;

export const Brand = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 150px 0 0;

    @media (max-width: 1000px) {
        padding: 10px;
    }
`;

export const Logo = styled.img`
    width: 50px;
`;

export const TitleContainer = styled.div``;

export const Title = styled.h1`
    font-size: clamp(36px, 10vw, 60px);
`;

export const SubTitle = styled.h3`
    font-size: clamp(20px, 7vw, 36px);
    margin-left: 5px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;

    .signup__button {
        background: #3cc0e1;
        color: #fff;
        border: 2px solid transparent;

        :hover {
            background: #1da1f2;
        }
    }

    @media (max-width: 1000px) {
        flex-direction: row;
        margin: 10px 0;
    }
`;

export const Button = styled(Link)`
    background: transparent;
    padding: 10px;
    border: 2px solid #1da1f2;
    color: #1da1f2;
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
        background: #162d40;
    }

    @media (max-width: 1000px) {
        margin: 0 10px;
    }
`;