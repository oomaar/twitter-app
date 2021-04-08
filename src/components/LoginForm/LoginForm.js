import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../lib/firebase";
import {
    InputContainer,
    Label,
    Span,
    Input,
    Logo,
} from "../Feature/styledFeature";
import { Button, Error } from "../SignupForm/styledSignupForm";
import {
    Container,
    Form,
    Title,
} from "./styledLoginForm";

const LoginForm = () => {
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
            <Form onSubmit={handleSignin}>
                <Logo src="/images/logo-white.png" />
                <Title>Login</Title>
                {error && <Error>{error}</Error>}
                <InputContainer className="login__inputContainer">
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
                <InputContainer className="login__inputContainer">
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
                <Button disabled={isInvalid} type="submit">Login</Button>
            </Form>
        </Container>
    );
};

export default LoginForm;
