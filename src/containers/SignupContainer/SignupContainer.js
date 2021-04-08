import { SignupForm } from "../../components";
import { HomeScreen } from "../../screens";
import {
    Container,
    Background,
} from "./styledSignupContainer";

const SignupContainer = () => {
    return (
        <Container>
            <Background>
                <HomeScreen />
            </Background>
            <SignupForm />
        </Container>
    );
};

export default SignupContainer;
