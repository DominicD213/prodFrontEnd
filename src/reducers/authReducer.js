// reducers/authReducer.js
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_SIGNUP_STATE,
  SET_LOGIN_STATE,
  SET_USER_INFO,
  SET_SESSION_ACTIVE,
  SET_USER_IMAGE,
  SET_ERROR,
  SET_LOADING
} from '../actions/authActions';

const initialState = {
  signUpState: false,
  loginState: false,
  username: '',
  password: '',
  email: '',
  loginUsername: '',
  loginPassword: '',
  sessionActive: false,
  userImage: null,
  imagePreview: '../Assets/personPlaceHolder.png',
  error: '',
  loading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: '' };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case SET_SIGNUP_STATE:
      return { ...state, signUpState: action.payload };
    case SET_LOGIN_STATE:
      return { ...state, loginState: action.payload };
    case SET_USER_INFO:
      return { ...state, ...action.payload };
    case SET_SESSION_ACTIVE:
      return { ...state, sessionActive: action.payload };
    case SET_USER_IMAGE:
      return { ...state, userImage: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default authReducer;
