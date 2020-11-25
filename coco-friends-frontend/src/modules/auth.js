import * as api from '../lib/api';

// ducks패턴

// action type
const GET_LOGGEDIN_USERINFO_SUCCESS = 'auth/GET_LOGGEDIN_USERINFO_SUCCESS';
const GET_LOGGEDIN_USERINFO_FAIL = 'auth/GET_LOGGEDIN_USERINFO_FAIL';

//thunk function
export const login = (id, pw) => async (dispatch) => {
  try {
    const res = await api.login({ id, pw });

    // 로그인성공
    document.cookie = `token=${res.data.token}`; // 엑세스 토큰 쿠키에저장
    dispatch({
      type: GET_LOGGEDIN_USERINFO_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    //로그인실패
    dispatch({
      type: GET_LOGGEDIN_USERINFO_FAIL,
      payload: e,
    });
    throw e;
  }
};

const initState = {
  authPhoto: null,
  authError: false,
};

function auth(state = initState, action) {
  switch (action.type) {
    case GET_LOGGEDIN_USERINFO_SUCCESS:
      return {
        authError: false,
        authPhoto: action.payload.photo,
      };
    case GET_LOGGEDIN_USERINFO_FAIL:
      return {
        ...state,
        authError: true,
      };
    default:
      return state;
  }
}

export default auth;
