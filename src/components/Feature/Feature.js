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
    return (
        <Container>
            <HomeForm>
                <InputContainer>
                    <Input
                        name="name"
                        type="text"
                        required
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
                    />
                    <Label>
                        <Span>Password</Span>
                    </Label>
                </InputContainer>
                <LoginButton>Login</LoginButton>
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
