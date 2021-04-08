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
`;

export const FeedHeader = styled.div`
    display: flex;
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