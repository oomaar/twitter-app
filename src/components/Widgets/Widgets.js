import { Search } from '@material-ui/icons';
import {
    TwitterTweetEmbed,
} from 'react-twitter-embed';
import {
    Container,
    WidgetsInput,
    Input,
    WidgetContainer,
    Title,
} from "./styledWidgets";

const Widgets = () => {
    return (
        <Container>
            <WidgetsInput>
                <Search className="widgets__searchIcon" />
                <Input placeholder="Search Twitter" type="text" />
            </WidgetsInput>

            <WidgetContainer>
                <Title>What's Happening</Title>
                <TwitterTweetEmbed tweetId={'1352742021123907585'} />
            </WidgetContainer>
        </Container>
    );
};

export default Widgets;
