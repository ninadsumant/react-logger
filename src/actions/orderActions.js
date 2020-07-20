import { SET_LOADING, ORDERS_ERROR, SET_CURRENT_ORDER, CLEAR_CURRENT_ORDER, UPDATE_ORDERS, SET_EDIT, GET_ORDERS } from  './types';


// get order data
export const getOrders = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/orders');
        const data = await res.json();

        dispatch({
            type: GET_ORDERS,
            payload: data
        });

    } catch (err) {
        dispatch({
            type: ORDERS_ERROR,
            payload: err.response.data
        });
    }
   
};

// set current order
export const setCurrentOrder = order => {
    return {
        type: SET_CURRENT_ORDER,
        payload: order
    }
}

// clear current order
export const clearCurrentOrder = () => {
    return {
        type: CLEAR_CURRENT_ORDER
    }
}

// update order on server
export const updateOrder = (order) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`/orders/${order.id}`,{
            method: 'PUT',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_ORDERS,
            payload: data
        });

    } catch (err) {
        dispatch({
            type: ORDERS_ERROR,
            payload: err.response.data
        });
    }
   
};

// set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

// set edit to true
export const setEdit = () => {
    return {
        type: SET_EDIT
    }
}