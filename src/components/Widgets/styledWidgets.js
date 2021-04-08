import styled from "styled-components";

export const Container = styled.div`
    flex: 0.3;

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const WidgetsInput = styled.div`
    display: flex;
    align-items: center;
    background: transparent;
    padding: 10px;
    border-radius: 20px;
    margin: 10px 0 0 20px;
    border: 1px solid rgb(136, 153, 166);

    .widgets__searchIcon {
        color: #808080;
    }
`;

export const Input = styled.input`
    border: none;
    background: transparent;
    color: #fff;
    font-size: 20px;
    padding-left: 10px;

    :focus {
        outline: none;
    }
`;

export const WidgetContainer = styled.div`
    margin-left: 20px;
    /* padding: 20px; */
    background: #15202b;
    border-radius: 20px;
`;

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 800;
`;
