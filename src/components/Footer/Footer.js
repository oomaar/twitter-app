import {
    Container,
    LinksContainer,
    Link,
} from "./styledFooter";

const Footer = () => {
    return (
        <Container>
            <LinksContainer>
                <Link>About</Link>
                <Link>Help Center</Link>
                <Link>Terms of Service</Link>
                <Link>Privacy Policy</Link>
                <Link>Cookie Policy</Link>
                <Link>Ads Info</Link>
                <Link>Blog</Link>
                <Link>Status</Link>
                <Link>Careers</Link>
                <Link>Brand Resources</Link>
            </LinksContainer>
            <LinksContainer className="footer__bottom">
                <Link>Advertising</Link>
                <Link>Marketing</Link>
                <Link>Twitter for Business</Link>
                <Link>Developers</Link>
                <Link>Directory</Link>
                <Link>Settings</Link>
                <Link>© 2021 Inc.</Link>
            </LinksContainer>
        </Container>
    );
};

export default Footer;
