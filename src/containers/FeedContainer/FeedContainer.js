import { useEffect, useState } from "react";
import { Post, TweetBox } from "../../components";
import { db } from "../../lib/firebase";
import {
    Container,
    FeedHeader,
    FeedTitle,
} from "./styledFeedContainer";

const FeedContainer = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db
            .collection("posts")
            .onSnapshot(snapshot => (
                setPosts(snapshot.docs.map(doc => doc.data()))
            ));
    }, []);

    return (
        <Container>
            <FeedHeader>
                <FeedTitle>Home</FeedTitle>
            </FeedHeader>
            <TweetBox />
            {posts.map(post => (
                <Post
                    key={post.userName + Math.random()}
                    displayName={post.displayName}
                    userName={post.userName}
                    verified={post.verified}
                    text={post.text}
                    image={post.image}
                    avatar={post.avatar}
                />
            ))}
        </Container>
    );
};

export default FeedContainer;
