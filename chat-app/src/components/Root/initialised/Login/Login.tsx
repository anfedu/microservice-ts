import {
  Card,
  Elevation,
  Classes,
  FormGroup,
  InputGroup,
  Button,
  Intent,
} from "@blueprintjs/core";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import styled from "styled-components";
import useGenerateId from "#root/utils/hooks/form/useGenerateId";

interface FormData {
  username: string;
  password: string;
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Form = styled.form`
  margin: auto;
  width: 25rem;
`;

const Heading = styled.strong.attrs({ className: Classes.HEADING })`
  display: block;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
`;

const LargeFormGroup = styled(FormGroup)`
  .bp3-label {
    font-size: 1rem;
  }
`;

const mutation = gql`
  mutation ($password: String!, $username: String!) {
    createUserSession(password: $password, username: $username) {
      user {
        username
      }
    }
  }
`;

function Login({}) {
  const { register, handleSubmit } = useForm<FormData>();
  const [createUserSession] = useMutation(mutation);
  const generateId = useGenerateId();

  const onSubmit = async ({ password, username }: FormData) => {
    const result = await createUserSession({
      variables: { password, username },
    });

    console.log(result, "<--- iki result ne ");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card elevation={Elevation.TWO}>
          <Heading>Chat App</Heading>
          <LargeFormGroup label="Username" labelFor={generateId("username")}>
            <InputGroup
              autoFocus
              large
              id={generateId("username")}
              {...register("username")}
            />
          </LargeFormGroup>
          <LargeFormGroup label="Password" labelFor={generateId("password")}>
            <InputGroup
              large
              type="password"
              id={generateId("password")}
              {...register("password")}
            />
          </LargeFormGroup>
          <Button intent={Intent.PRIMARY} large type="submit">
            Login
          </Button>
        </Card>
      </Form>
    </Wrapper>
  );
}

export default Login;
