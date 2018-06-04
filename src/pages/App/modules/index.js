
export const SEARCH_REQUET = 'SEARCH_REQUET';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';


const initialState = {
  loading: false,
  userimage: [],
  errors: null,
};

const app = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_REQUET:
      return {...state, loading: true };
    case SEARCH_SUCCESS:
      return {...state, loading: false, userimage: action.payload};
    case SEARCH_ERROR:
      return {...state, loading:false,  errors: action.errors};
      default:
      return state;
  }
};

export default app;