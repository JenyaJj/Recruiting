const hostname = 'http://localhost:9999';

const getFlorists = async () => {
    const response = await fetch(hostname + '/orderarr', {method: 'GET'});
    if (response.status !== 200) {
        throw new Error(`getFlorists returned ${response.status}`);
    }
    const jsonData = await response.json();
    return jsonData;
};

const addFlorist = async (orderArr) => {
    const response = await fetch(hostname + '/orderarr', {
        method: 'POST', 
        body: JSON.stringify(orderArr),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status !== 200) {
        throw new Error(`addFlorist returned ${response.status}`);
    }
    const { info } = await response.json();
    console.log(info);
};

const addOrder = async ({ order, orderArrId }) => {
    const response = await fetch(hostname + `/orderarr/${orderArrId}/order`, {
        method: 'POST', 
        body: JSON.stringify(order),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response);

    if (response.status !== 200) {
        throw new Error(`addOrder returned ${response.status}`);
    }
    const { info } = await response.json();
    console.log(info);
};

const editOrder = async ({ orderId, orderArrId, newName, newAuthor }) => {
    const response = await fetch(hostname + `/orderarr/${orderArrId}/order/${orderId}`, {
        method: 'PATCH', 
        body: JSON.stringify({ newName: newName, newAuthor: newAuthor }), 
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status !== 200) {
        throw new Error(`editOrderName returned ${response.status}`);
    }
    const { info } = await response.json();
    console.log(info);
};

const removeOrder = async ({ orderId, orderArrId }) => {
    const response = await fetch(hostname + `/orderarr/${orderArrId}/order/${orderId}`, {
        method: 'DELETE'
    });

    if (response.status !== 200) {
        throw new Error(`removeOrder returned ${response.status}`);
    }
    const { info } = await response.json();
    console.log(info);
};

const moveOrder = async ({ orderId, orderArrId, destShelfId }) => {
    const response = await fetch(hostname + `/orderarr/${orderArrId}`, {
        method: 'PATCH',
        body: JSON.stringify({ orderId: orderId, destShelfId: destShelfId }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status !== 200) {
        throw new Error(`removeOrder returned ${response.status}`);
    }
    const { info } = await response.json();
    console.log(info);
};

export {
    getFlorists,
    addFlorist,
    addOrder,
    editOrder,
    removeOrder,
    moveOrder,
};
