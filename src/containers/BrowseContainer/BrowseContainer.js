import { FeedContainer } from "..";
import { Sidebar, Widgets } from "../../components";
import {
    Container,
} from "./styledBrowseContainer";

const BrowseContainer = () => {
    return (
        <Container>
            <Sidebar />
            <FeedContainer />
            <Widgets />
        </Container>
    );
};

export default BrowseContainer;
