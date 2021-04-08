import { FeedContainer } from "..";
import { Sidebar, Widgets, BrowseFooter } from "../../components";
import {
    Container,
} from "./styledBrowseContainer";

const BrowseContainer = () => {
    return (
        <Container>
            <Sidebar />
            <FeedContainer />
            <Widgets />
            <BrowseFooter />
        </Container>
    );
};

export default BrowseContainer;
