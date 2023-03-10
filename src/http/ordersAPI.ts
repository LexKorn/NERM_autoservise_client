import { $authHost } from ".";

// export const createOrder = async (order: FormData) => {
//     const {data} = await $authHost.post('api/orders', order);
//     return data;
// };

export const createOrder = async (opened: string, closed: string, cost: number, income: number, profit: number, comment: string, autoId: number, masterId: number) => {
    const {data} = await $authHost.post('api/orders', {opened, closed, cost, income, profit, comment, autoId, masterId});
    return data;
};

export const fetchOrders = async () => {
    const {data} = await $authHost.get('api/orders');
    return data;
};

export const fetchOneOrder = async (id: string | undefined) => {
    const {data} = await $authHost.get('api/orders/' + id);
    return data;
};

export const updateOrder = async (id: number, order: FormData) => {
    const {data} = await $authHost.put('api/orders/' + id, order);
    return data;
};

export const deleteOrder = async (id: number) => {
    const {data} = await $authHost.delete('api/orders/' + id);
    return data;
};