import { Avatar } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import GifIcon from '@material-ui/icons/Gif';
import BarChartIcon from '@material-ui/icons/BarChart';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import {
    Container,
    TweetForm,
    SubContainer,
    TweetContainer,
    Text,
    ImageInput,
    IconsContainer,
    Icons,
    Icon,
    Button,
} from "./styledTweetBox";
import setTextareaHeight from "../../utils/setTextareaHeight";
import { useState } from 'react';
import { db } from '../../lib/firebase';

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Omar Hassan",
            userName: "omaar_5",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "/images/pharaohdev.png",
        });
    };

    return (
        <Container>
            <TweetForm>
                <SubContainer>
                    <TweetContainer>
                        <Avatar style={{ cursor: 'pointer' }} />
                        <Text
                            id="tweetbox-textArea"
                            placeholder="What's happening?"
                            rows="2"
                            cols="2"
                            value={tweetMessage}
                            onChange={event => (
                                setTweetMessage(event.target.value) +
                                setTextareaHeight(event, "100px") +
                                console.log("Just Testing The On Change Function For Fun !!!")
                            )}
                        >
                        </Text>
                    </TweetContainer>
                    <ImageInput
                        className="tweetBox__imageInput"
                        placeholder="Optional: Paste an image URL"
                        type="text"
                        value={tweetImage}
                        onChange={event => setTweetImage(event.target.value)}
                    />
                </SubContainer>
                <IconsContainer>
                    <Icons>
                        <Icon>
                            <ImageIcon />
                        </Icon>
                        <Icon>
                            <GifIcon />
                        </Icon>
                        <Icon>
                            <BarChartIcon className="charts" />
                        </Icon>
                        <Icon>
                            <EmojiEmotionsIcon />
                        </Icon>
                        <Icon>
                            <EventNoteIcon />
                        </Icon>
                    </Icons>
                    <Button onClick={sendTweet} type="submit">Tweet</Button>
                </IconsContainer>
            </TweetForm>
        </Container>
    );
};

export default TweetBox;
