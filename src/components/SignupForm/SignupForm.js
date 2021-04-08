import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../lib/firebase";
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
    Error,
} from "./styledSignupForm";

const SignupForm = () => {
    const [firstName, setFirstName] = useState("");
    const [error, setError] = useState("");
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const history = useHistory();

    const isInvalid = firstName === "" || emailRef === "" || passwordRef === "";

    const handleSignup = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            )
            .then(authUser => {
                authUser.user.updateProfile({
                    displayName: firstName
                })
            })
            .then(() => history.push("/browse"))
            .catch(err => setError(err.message));
    };

    return (
        <Container>
            <Form onSubmit={handleSignup}>
                <Title>Sign Up :</Title>
                {error && <Error>{error}</Error>}
                <InputContainer className="signup__inputContainer">
                    <Input
                        name="name"
                        type="text"
                        required
                        value={firstName}
                        onChange={({ target }) => setFirstName(target.value)}
                        autoComplete="off"
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
                        ref={emailRef}
                        autoComplete="off"
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
                        ref={passwordRef}
                        autoComplete="off"
                    />
                    <Label>
                        <Span>Password</Span>
                    </Label>
                </InputContainer>
                <Button disabled={isInvalid} type="submit">Sign Up Now</Button>
            </Form>
        </Container>
    );
};

export default SignupForm;
