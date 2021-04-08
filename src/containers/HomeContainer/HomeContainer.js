import { BackGround, Feature, Footer } from "../../components";
import {
    Container,
    SubContainer,
} from "./styledHomeContainer";

const HomeContainer = () => {
    return (
        <Container>
            <SubContainer>
                <BackGround />
                <Feature />
            </SubContainer>
            <Footer />
        </Container>
    );
};

export default HomeContainer;
