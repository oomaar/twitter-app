import {
    InputContainer,
    Label,
    Span,
    Input,
    Logo,
} from "../Feature/styledFeature";
import { Button } from "../SignupForm/styledSignupForm";
import {
    Container,
    Form,
    Title,
} from "./styledLoginForm";

const LoginForm = () => {
    return (
        <Container>
            <Form>
                <Logo src="/images/logo-white.png" />
                <Title>Login</Title>
                <InputContainer className="login__inputContainer">
                    <Input
                        name="email"
                        type="email"
                        required
                    />
                    <Label>
                        <Span>Email</Span>
                    </Label>
                </InputContainer>
                <InputContainer className="login__inputContainer">
                    <Input
                        name="password"
                        type="password"
                        required
                    />
                    <Label>
                        <Span>Password</Span>
                    </Label>
                </InputContainer>
                <Button>Login</Button>
            </Form>
        </Container>
    );
};

export default LoginForm;
