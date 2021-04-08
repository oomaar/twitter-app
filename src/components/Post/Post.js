import { Avatar } from '@material-ui/core';
import {
    ChatBubbleOutline,
    FavoriteBorder,
    Publish,
    Repeat,
    VerifiedUserRounded
} from '@material-ui/icons';
import {
    Container,
    SubContainer,
    PostContainer,
    AvatarContainer,
    PostHeader,
    PostHeaderText,
    PostTitle,
    PostVer,
    PostDescription,
    PostText,
    PostImageContainer,
    PostImage,
    PostFooter,
    IconsContainer,
    PostIcon,
} from "./styledPost";

const Post = ({ displayName, userName, verified, text, image, avatar }) => {
    return (
        <Container>
            <SubContainer>
                <AvatarContainer>
                    <Avatar src={avatar} alt={userName} />
                </AvatarContainer>
                <PostContainer>
                    <PostHeader>
                        <PostHeaderText>
                            <PostTitle>
                                {displayName}
                        <PostVer>
                                    {verified} && <VerifiedUserRounded className="badge" /> @username
                        </PostVer>
                            </PostTitle>
                        </PostHeaderText>
                        <PostDescription>
                            <PostText>{text}</PostText>
                        </PostDescription>
                    </PostHeader>
                    <PostImageContainer>
                        <PostImage src={image} alt="image" />
                    </PostImageContainer>
                </PostContainer>
            </SubContainer>
            <PostFooter>
                <IconsContainer>
                    <PostIcon>
                        <ChatBubbleOutline />
                    </PostIcon>
                    <PostIcon>
                        <Repeat />
                    </PostIcon>
                    <PostIcon>
                        <FavoriteBorder />
                    </PostIcon>
                    <PostIcon>
                        <Publish />
                    </PostIcon>
                </IconsContainer>
            </PostFooter>
        </Container>
    );
};

export default Post;
