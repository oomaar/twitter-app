import styled from "styled-components";

export const Container = styled.div`
    flex: 0.4;
    border-right: 1px solid rgb(136, 153, 166);
    min-width: fit-content;
    overflow-y: scroll;
    scrollbar-width: none; /* Hides Scroll bar for IE and Edge */
    -ms-overflow-style: none; /* Hides Scroll bar for FireFox */

    ::-webkit-scrollbar {
        /* Hides Scroll bar for Chrome, Safari and Opera */
        display: none;
    }

    @media (max-width: 1000px) {
        flex: 0.6;
    }

    @media (max-width: 750px) {
        flex: 1;
    }
`;

export const FeedHeader = styled.div`
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
    border: 1px solid rgb(136, 153, 166);
    padding: 5px 10px;
    background: #15202b;
`;

export const FeedTitle = styled.h3`
    font-size: 20px;
    font-weight: 800;
`;

export const Button = styled.button`
    padding: 5px;
    border-radius: 30px;
    background-color: #1da1f2;
    color: #fff;
    outline: none;
    cursor: pointer;
    border: 0;
    display: none;
    margin-left: auto;
    width: 40%;
    height: 30px;

    :hover {
        background: #3cc0e1;
    }

    @media (max-width: 750px) {
        display: block;
    }
`;
