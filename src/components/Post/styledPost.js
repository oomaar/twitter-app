import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px solid rgb(136, 153, 166);
    padding-bottom: 10px;
    max-width: 600px;
    max-height: 500px;
`;

export const AvatarContainer = styled.div`
    padding: 20px;
`;

export const SubContainer = styled.div`
    display: flex;
    width: 100%;
`;

export const PostContainer = styled.div`
    flex: 1;
    padding: 10px;
`;

export const PostHeader = styled.div`
`;

export const PostHeaderText = styled.div``;

export const PostTitle = styled.h3`
    font-size: 15px;
    margin-bottom: 5px;
`;

export const PostVer = styled.span`
    font-weight: 600;
    font-size: 12px;
    color: #808080;
    margin-left: 5px;

    .badge {
        font-size: 14px;
        color: #1da1f2;
    }
`;

export const PostDescription = styled.div`
    display: flex;
`;

export const PostText = styled.p`
    font-weight: 400;
    max-width: fit-content;
    margin-bottom: 20px;
`;

export const PostImageContainer = styled.div`
    width: 100%;
    height: 200px;
    background: url(${({ src }) => (src ? `${src}` : ' ')});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
`;

export const PostImage = styled.img`
    border-radius: 20px;
    width: 100%;
    height: auto;
`;

export const PostFooter = styled.div`
    margin-top: 10px;
    width: 100%;
    padding: 0 20px;
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PostIcon = styled.div`
    cursor: pointer;

    :hover {
        opacity: 0.5;
    }
`;