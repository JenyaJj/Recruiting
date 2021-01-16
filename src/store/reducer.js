import {
    ADD_FLORIST,
    ADD_ORDER,
    EDIT_ORDER_NAME,
    EDIT_ORDER_AUTHOR,
    REMOVE_ORDER,
    DOWNLOAD_ORDERS_DATA,
    MOVE_ORDER_LEFT,
    MOVE_ORDER_RIGHT
} from './actions';

const initialState = {
    florists: []
};

export default function reducer(state=initialState, {type, payload}) {
    let orderToMove = null;

    switch(type) {
    case ADD_FLORIST:
        return {
            ...state,
            florists: [
                ...state.florists, payload
            ]
        };
    case ADD_ORDER:
        return {
            ...state,
            florists: state.florists.map((orderArr, index) => (
                index === payload.orderArrId ? {
                    ...orderArr,
                    orders: [...orderArr.orders, payload.order]
                }
                : orderArr
            ))
        };
    case EDIT_ORDER_NAME:
        return {
            ...state,
            florists: state.florists.map((orderArr, index) => (
                index === payload.orderArrId ? {
                    ...orderArr,
                    orders: orderArr.orders.map((order, indexOrder) => (
                        indexOrder === payload.orderId ? {
                            ...order,
                            name: payload.newName
                        }
                        : order
                    ))
                }
                : orderArr
            ))
        };
    case EDIT_ORDER_AUTHOR:
        return {
            ...state,
            florists: state.florists.map((orderArr, index) => (
                index === payload.orderArrId ? {
                    ...orderArr,
                    orders: orderArr.orders.map((order, indexOrder) => (
                        indexOrder === payload.orderId ? {
                            ...order,
                            author: payload.newAuthor
                        }
                        : order
                    ))
                }
                : orderArr
            ))
        };
    case REMOVE_ORDER:
        return {
            ...state,
            florists: state.florists.map((orderArr, index) => (
                index === payload.orderArrId ? {
                    ...orderArr,
                    orders: orderArr.orders.filter((order, orderIndex) => (orderIndex !== payload.orderId))
                }
                : orderArr
            ))
        };
    case DOWNLOAD_ORDERS_DATA:
        return {
            ...state,
            florists: payload
        }
    case MOVE_ORDER_LEFT:
        orderToMove = state.florists[payload.orderArrId].orders[payload.orderId];

        return {
            ...state,
            florists: state.florists.map((orderArr, index) => {
                if (index === payload.orderArrId) {
                    return {
                        ...orderArr,
                        orders: orderArr.orders.filter((order, orderIndex) => (orderIndex !== payload.orderId))
                    };
                }
                if (index === payload.orderArrId - 1) {
                    return {
                        ...orderArr,
                        orders: [...orderArr.orders, orderToMove]
                    };
                }
                return orderArr;
            })
        };
    case MOVE_ORDER_RIGHT:
        orderToMove = state.florists[payload.orderArrId].orders[payload.orderId];

        return {
            ...state,
            florists: state.florists.map((orderArr, index) => {
                if (index === payload.orderArrId) {
                    return {
                        ...orderArr,
                        orders: orderArr.orders.filter((order, orderIndex) => (orderIndex !== payload.orderId))
                    };
                }
                if (index === payload.orderArrId + 1) {
                    return {
                        ...orderArr,
                        orders: [...orderArr.orders, orderToMove]
                    };
                }
                return orderArr;
            })
        };
    default:
        return state;
    }
};
