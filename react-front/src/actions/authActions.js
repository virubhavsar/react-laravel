import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('your_api_endpoint/login', formData);
    const { token } = res.data;

    localStorage.setItem('token', token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: token,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
