import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PostAddIcon from '@material-ui/icons/PostAdd';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { auth } from '../../lib/firebase';
import { useHistory } from 'react-router-dom';
import {
    Container,
    Logo,
    SideContainer,
    SidebarOption,
    SidebarTitle,
    Button,
} from "./styledSidebar";

const Sidebar = () => {
    const history = useHistory();

    const handleLogout = () => {
        auth.signOut();
        history.push("/login");
    };

    return (
        <Container>
            <Logo src="/images/logo-twitter.png" alt="Twitter" />
            <SideContainer>
                <SidebarOption active>
                    <HomeIcon />
                    <SidebarTitle>Home</SidebarTitle>
                </SidebarOption>
                <SidebarOption>
                    <ExploreIcon />
                    <SidebarTitle>Explore</SidebarTitle>
                </SidebarOption>
                <SidebarOption>
                    <NotificationsIcon />
                    <SidebarTitle>Notifications</SidebarTitle>
                </SidebarOption>
                <SidebarOption>
                    <EmailIcon />
                    <SidebarTitle>Messages</SidebarTitle>
                </SidebarOption>
                <SidebarOption>
                    <BookmarkIcon />
                    <SidebarTitle>Bookmarks</SidebarTitle>
                </SidebarOption>
                <SidebarOption>
                    <PostAddIcon />
                    <SidebarTitle>Lists</SidebarTitle>
                </SidebarOption>
                <SidebarOption>
                    <PersonIcon />
                    <SidebarTitle>Profile</SidebarTitle>
                </SidebarOption>
                <SidebarOption>
                    <MoreHorizIcon />
                    <SidebarTitle>More</SidebarTitle>
                </SidebarOption>
                <Button onClick={handleLogout}>Log out</Button>
            </SideContainer>
        </Container>
    );
};

export default Sidebar;
