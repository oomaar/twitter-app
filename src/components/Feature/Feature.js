import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../lib/firebase";
import { Error } from "../SignupForm/styledSignupForm";
import {
    Container,
    HomeForm,
    InputContainer,
    Label,
    Span,
    Input,
    LoginButton,
    SubContainer,
    Brand,
    Logo,
    TitleContainer,
    Title,
    SubTitle,
    ButtonsContainer,
    Button,
} from "./styledFeature";

const Feature = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState("");
    const history = useHistory();
    const isInvalid = passwordRef === '' || emailRef === '';

    const handleSignin = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            )
            .then(authUser => history.push("/browse"))
            .catch(err => setError(err.message));
    };

    return (
        <Container>
            <HomeForm onSubmit={handleSignin}>
                {error && <Error>{error}</Error>}
                <InputContainer>
                    <Input
                        name="name"
                        type="text"
                        required
                        ref={emailRef}
                        autoComplete="off"
                    />
                    <Label>
                        <Span>Phone, Email or Username</Span>
                    </Label>
                </InputContainer>
                <InputContainer>
                    <Input
                        name="password"
                        type="password"
                        required
                        ref={passwordRef}
                        autoComplete="off"
                    />
                    <Label>
                        <Span>Password</Span>
                    </Label>
                </InputContainer>
                <LoginButton disabled={isInvalid} type="submit">Login</LoginButton>
            </HomeForm>

            <SubContainer>
                <Brand>
                    <Logo src="/images/logo-white.png" alt="Twitter" />
                    <TitleContainer>
                        <Title>Happening now</Title>
                        <SubTitle>Join Twitter today.</SubTitle>
                    </TitleContainer>
                    <ButtonsContainer>
                        <Button to="/signup" className="signup__button">Sign up</Button>
                        <Button to="/login">Log in</Button>
                    </ButtonsContainer>
                </Brand>
            </SubContainer>
        </Container>
    );
};

export default Feature;
