import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import AutoBlock from '../components/AutoBlock/AutoBlock';
import OrderList2 from '../components/OrderList/OrderList2';
import { IOrder } from '../types/types';
import { fetchOrders } from '../http/ordersAPI';


const AutoPage: React.FC = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [ordersAuto, setOrdersAuto] = useState<IOrder[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const {id} = useParams();

    useEffect(() => {
        fetchOrders().then(data => {
            setOrders(data);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (orders.length) {
            setOrdersAuto(orders.filter(order => order.autoId === Number(id)));
        }
    }, [orders]);

    return (
        <div>
            <AutoBlock />
            {loading ? <Spinner /> : <OrderList2 title="Заказы:" orderItems={ordersAuto} />}
        </div>
    );
};

export default AutoPage;