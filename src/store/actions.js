const ADD_FLORIST = 'ADD_FLORIST';
const ADD_ORDER = 'ADD_ORDER';
const EDIT_ORDER_NAME = 'EDIT_ORDER_NAME';
const EDIT_ORDER_AUTHOR = 'EDIT_ORDER_AUTHOR';
const REMOVE_ORDER = 'REMOVE_ORDER';
const DOWNLOAD_ORDERS_DATA = 'DOWNLOAD_ORDERS_DATA';
const MOVE_ORDER_LEFT = 'MOVE_ORDER_LEFT';
const MOVE_ORDER_RIGHT = 'MOVE_ORDER_RIGHT';


const addFloristAction = (orderArr) => ({
    type: ADD_FLORIST,
    payload: orderArr
});

const addOrderAction = ({ order, orderArrId }) => ({
    type: ADD_ORDER,
    payload: { order, orderArrId }
});

const editOrderNameAction = ({ orderId, orderArrId, newName }) => ({
    type: EDIT_ORDER_NAME,
    payload: { orderId, orderArrId, newName }
});

const editOrderAuthorAction = ({ orderId, orderArrId, newAuthor }) => ({
    type: EDIT_ORDER_AUTHOR,
    payload: { orderId, orderArrId, newAuthor }
});

const removeOrderAction = ({ orderId, orderArrId }) => ({
    type: REMOVE_ORDER,
    payload: { orderId, orderArrId }
});

const downloadOrdersDataAction = (florists) => ({
    type: DOWNLOAD_ORDERS_DATA,
    payload: florists
});

const moveOrderLeftAction = ({ orderId, orderArrId }) => ({
    type: MOVE_ORDER_LEFT,
    payload: { orderId, orderArrId }
});

const moveOrderRightAction = ({ orderId, orderArrId  }) => ({
    type: MOVE_ORDER_RIGHT,
    payload: { orderId, orderArrId }
});

export {
    ADD_FLORIST,
    ADD_ORDER,
    EDIT_ORDER_NAME,
    EDIT_ORDER_AUTHOR,
    REMOVE_ORDER,
    DOWNLOAD_ORDERS_DATA,
    MOVE_ORDER_LEFT,
    MOVE_ORDER_RIGHT,
    addFloristAction,
    addOrderAction,
    editOrderNameAction,
    editOrderAuthorAction,
    removeOrderAction,
    downloadOrdersDataAction,
    moveOrderLeftAction,
    moveOrderRightAction
};
