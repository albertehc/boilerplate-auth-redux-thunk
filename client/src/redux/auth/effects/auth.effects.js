import * as authApi from "../../../api/auth.api";
import * as A from "../actions/auth.actions";

export const signupEffect = ({ payload }) => (dispatch) => {
  dispatch(A.signupRequest());
  authApi
    .signup(payload)
    .then((res) => dispatch(A.signupSuccess(res)))
    .catch((e) => dispatch(A.signupFailure(e.response.data.msg)));
};

export const loginEffect = ({ payload }) => (dispatch) => {
  dispatch(A.loginRequest());
  authApi
    .login(payload)
    .then((res) => dispatch(A.loginSuccess(res)))
    .catch((e) => dispatch(A.loginFailure(e.response.data.msg)));
};

export const meEffect = () => (dispatch) => {
  dispatch(A.meRequest());
  authApi
    .me()
    .then((res) => dispatch(A.meSuccess(res)))
    .catch((e) => dispatch(A.meFailure(e.response.data.msg)));
};

export const editEffect = ({ payload }) => (dispatch) => {
  dispatch(A.editRequest());
  authApi
    .edit(payload)
    .then((res) => dispatch(A.editSuccess(res)))
    .catch((e) => dispatch(A.editFailure(e.response.data.msg)));
};

export const deleteEffect = (payload) => (dispatch) => {
  dispatch(A.deleteRequest());
  authApi
    .remove(payload)
    .then((res) => dispatch(A.deleteSuccess(res)))
    .catch((e) => dispatch(A.deleteFailure(e.response.data.msg)));
};

export const logoutEffect = () => (dispatch) => {
  dispatch(A.logoutRequest());
  authApi
    .logout()
    .then(() => dispatch(A.logoutSuccess()))
    .catch((e) => dispatch(A.logoutFailure(e.response.data.msg)));
};
