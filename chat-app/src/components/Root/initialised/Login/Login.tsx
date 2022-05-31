import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Form = styled.form`
  margin: auto;
`;

function Login({}) {
  return (
    <Wrapper>
      <Form>Login</Form>
    </Wrapper>
  );
}

export default Login;
