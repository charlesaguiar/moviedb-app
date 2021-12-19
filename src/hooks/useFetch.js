import { useEffect, useReducer } from 'react';

export const initialState = {
  loading: false,
  success: false,
  error: null,
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        loading: true,
        success: false,
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
        data: action.data,
      };
    case 'FAILED':
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error,
      };
    default: return state;
  }
};

export default function (fetchFunction, deps = []) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetch = async () => {
      dispatch({ type: 'START' });

      try {
        const data = await fetchFunction();
        dispatch({ type: 'SUCCESS', data });
      } catch (err) {
        dispatch({ type: 'FAILED', error: err });
      }
    };

    fetch();
  }, deps);

  return [state, fetch];
}
