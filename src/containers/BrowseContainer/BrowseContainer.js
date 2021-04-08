import { FeedContainer } from "..";
import { Sidebar } from "../../components";
import {
    Container,
} from "./styledBrowseContainer";

const BrowseContainer = () => {
    return (
        <Container>
            {/* Sidebar */}
            <Sidebar />
            {/* Feed */}
            <FeedContainer />
            {/* Widgets */}
        </Container>
    );
};

export default BrowseContainer;
