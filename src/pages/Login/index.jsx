import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import { FormHelperText, TextField } from '@mui/material';

import { useAuth } from 'contexts/AuthContext';

import {
  Container, FormContainer, Title, OptionsContainer,
} from './styles';

const Login = function () {
  const { login, loadingLogin } = useAuth();
  const navigate = useNavigate();

  const [signIn, setSignIn] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: null, password: null });

  const handleLoginSubmit = async () => {
    const { email, password } = signIn;
    if (!email || !password) {
      setError({
        email: !email && 'Valid e-mail must be provided.',
        password: !password && 'Valid password must be provided.',
      });
      return;
    }

    await login(signIn);
    setError({ email: null, password: null });
    navigate('/');
  };

  return (
    <Container>
      <FormContainer>
        <Title>Login</Title>
        <div>
          <TextField
            id="email"
            type="email"
            label="E-mail"
            required
            variant="outlined"
            value={signIn.email}
            onChange={(e) => setSignIn((s) => ({ ...s, email: e.target.value }))}
            fullWidth
            autoComplete="off"
            error={!!error.email}
          />
          {error.email && (<FormHelperText>{error.email}</FormHelperText>)}
        </div>
        <div>
          <TextField
            id="password"
            type="password"
            label="Password"
            required
            variant="outlined"
            value={signIn.password}
            onChange={(e) => setSignIn((s) => ({ ...s, password: e.target.value }))}
            fullWidth
            autoComplete="off"
            error={!!error.password}
          />
          {error.password && (<FormHelperText>{error.password}</FormHelperText>)}
        </div>
        <LoadingButton
          type="submit"
          variant="contained"
          onClick={handleLoginSubmit}
          loading={loadingLogin}
          fullWidth
        >
          Access
        </LoadingButton>
        <OptionsContainer>
          <span><strong>Forgot password</strong></span>
          <span>
            Doesnt have an account?
            {' '}
            <strong>Register</strong>
          </span>
        </OptionsContainer>
      </FormContainer>
    </Container>
  );
};

export default Login;
