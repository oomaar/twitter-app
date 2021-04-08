import styled from "styled-components";

export const Container = styled.div`
    border-bottom: 1px solid rgb(136, 153, 166);
`;

export const TweetForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const SubContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

export const TweetContainer = styled.div`
    padding: 10px;
    display: flex;
`;

export const Text = styled.textarea`
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
    border: none;
    background: transparent;
    color: #fff;
`;

export const ImageInput = styled.input`
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
    border: 1px solid rgb(136, 153, 166);
    background: transparent;
    color: #fff;
`;

export const IconsContainer = styled.div`
    display: flex;
    padding: 20px 10px;
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
`;

export const Icon = styled.div`
    cursor: pointer;
    margin: 0 10px;

    :hover {
        opacity: 0.6;
    }

    .charts {
        transform: rotate(90deg);
    }
`;

export const Button = styled.button`
    background-color: #1da1f2;
    border: none;
    color: #fff;
    font-weight: 900;
    border-radius: 30px;
    width: 80px;
    height: 40px;
    margin: 0 0 0 auto;
    cursor: pointer;
    outline: 0;

    :hover {
        background: #3cc0e1;
    }
`;