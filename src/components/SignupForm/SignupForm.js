import {
    InputContainer,
    Label,
    Span,
    Input,
} from "../Feature/styledFeature";
import {
    Container,
    Form,
    Title,
    Button,
} from "./styledSignupForm";

const SignupForm = () => {
    return (
        <Container>
            <Form>
                <Title>Sign Up :</Title>
                <InputContainer className="signup__inputContainer">
                    <Input
                        name="name"
                        type="text"
                        required
                    />
                    <Label>
                        <Span>Name</Span>
                    </Label>
                </InputContainer>
                <InputContainer className="signup__inputContainer">
                    <Input
                        name="email"
                        type="email"
                        required
                    />
                    <Label>
                        <Span>Email</Span>
                    </Label>
                </InputContainer>
                <InputContainer className="signup__inputContainer">
                    <Input
                        name="password"
                        type="password"
                        required
                    />
                    <Label>
                        <Span>Password</Span>
                    </Label>
                </InputContainer>
                <Button>Sign Up Now</Button>
            </Form>
        </Container>
    );
};

export default SignupForm;
