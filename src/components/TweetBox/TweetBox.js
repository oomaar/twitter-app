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
    Text,
    IconsContainer,
    Icons,
    Icon,
    Button,
} from "./styledTweetBox";
import setTextareaHeight from "../../utils/setTextareaHeight";

const TweetBox = () => {
    return (
        <Container>
            <TweetForm>
                <SubContainer>
                    <Avatar style={{ cursor: 'pointer' }} />
                    <Text
                        id="tweetbox-textArea"
                        placeholder="What's happening?"
                        rows="2"
                        cols="2"
                        onChange={(event) => setTextareaHeight(event, "100px")}
                    >
                    </Text>
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
                    <Button type="submit">Tweet</Button>
                </IconsContainer>
            </TweetForm>
        </Container>
    );
};

export default TweetBox;
