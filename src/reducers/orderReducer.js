import {
  SET_EDIT,
  SET_LOADING,
  ORDERS_ERROR,
  UPDATE_ORDERS,
  SET_CURRENT_ORDER,
  CLEAR_CURRENT_ORDER,
  GET_ORDERS,
} from "../actions/types";

const initialState = {
  orders: null,
  current: null,
  loading: false,
  error: null,
  edit: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };

    case UPDATE_ORDERS:
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload.id
            ? action.payload
            : order
        ),
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SET_EDIT:
      return {
        ...state,
        edit: true,
      };

    case SET_CURRENT_ORDER:
      return {
        ...state,
        current: action.payload,
      };

    case CLEAR_CURRENT_ORDER:
      return {
        ...state,
        current: null,
      };

    case ORDERS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
