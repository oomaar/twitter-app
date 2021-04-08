import { Post, TweetBox } from "../../components";
import {
    Container,
    FeedHeader,
    FeedTitle,
} from "./styledFeedContainer";

const FeedContainer = () => {
    return (
        <Container>
            <FeedHeader>
                <FeedTitle>Home</FeedTitle>
            </FeedHeader>
            <TweetBox />
            <Post />
        </Container>
    );
};

export default FeedContainer;
