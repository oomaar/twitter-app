import styled from "styled-components";

export const Container = styled.div`
    border-right: 1px solid rgb(136, 153, 166);
    flex: 0.3;
    padding: 0 20px;

    @media (max-width: 750px) {
        display: none;
    }
`;

export const Logo = styled.img`
    width: 60px;
    margin: 20px 0 20px 20px;
`;

export const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

export const SidebarOption = styled.div`
    display: flex;
    align-items: center;
    color: ${({active}) => active && "#1da1f2"};
    cursor: pointer;
    border-radius: 30px;
    padding: 0 10px;

    :hover {
        background: #162d40;
    }
`;

export const SidebarTitle = styled.h3`
    margin-left: 20px;
`;

export const Button = styled.button`
    padding: 20px;
    border-radius: 30px;
    background-color: #1da1f2;
    color: #fff;
    outline: none;
    cursor: pointer;
    margin-top: 20px;
    border: 0;

    :hover {
        background: #3cc0e1;
    }
`;