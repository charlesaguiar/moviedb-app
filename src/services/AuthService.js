import AuthRepository from 'repositories/AuthRepository';

const login = async (signIn) => AuthRepository.login(signIn);

export default {
  login,
};
