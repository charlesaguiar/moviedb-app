// import api from 'config/api';

const login = async (signIn) => {
  console.log({ signIn });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          token:
            '91j893h281h9nf98fnf2309jd09jkkd0as98238j9fr8j98f9j8f298r829r-f',
          user: {
            name: 'Charles',
            email: 'charlescaguiar@gmail.com',
          },
        },
      });
    }, 2000);
  });
};

export default {
  login,
};
