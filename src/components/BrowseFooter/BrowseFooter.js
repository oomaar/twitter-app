import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import {
    Container,
    IconsContainer,
    IconContainer,
} from "./styledBrowseFooter";

const BrowseFooter = () => {
    return (
        <Container>
            <IconsContainer>
                <IconContainer>
                    <HomeIcon />
                </IconContainer>
                <IconContainer>
                    <SearchIcon />
                </IconContainer>
                <IconContainer>
                    <NotificationsIcon />
                </IconContainer>
                <IconContainer>
                    <EmailIcon />
                </IconContainer>
            </IconsContainer>
        </Container>
    );
};

export default BrowseFooter;
