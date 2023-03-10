import React, {useState, useEffect} from 'react';

import OrderBlock from '../components/OrderBlock/OrderBlock';
import OrderList from '../components/OrderList/OrderList';
import { IActivity, IAutopart } from '../types/types';
import { fetchActivities } from '../http/activitiesAPI';
import { fetchAutoparts } from '../http/autopartsAPI';


const OrderPage: React.FC = () => {
    const [activities, setActivities] = useState<IActivity[]>([]);
    const [autoparts, setAutoparts] = useState<IAutopart[]>([]);

    useEffect(() => {
        fetchActivities().then(data => setActivities(data));
        fetchAutoparts().then(data => setAutoparts(data));
    }, []);

    // const activities: IActivity[] = [
    //     {
    //         id: 1,
    //         name: 'ремонт тормоза',
    //         price: 1000,
    //         orderId: 1,
    //         userId: 1
    //     },
    //     {
    //         id: 2,
    //         name: 'замена колодки',
    //         price: 500,
    //         orderId: 1,
    //         userId: 1
    //     },
    // ];

    // const autoparts: IAutopart[] = [
    //     {
    //         id: 1,
    //         name: 'тормоз',
    //         price: 800,
    //         orderId: 1,
    //         userId: 1
    //     },
    //     {
    //         id: 2,
    //         name: '2 колодки',
    //         price: 1000,
    //         orderId: 1,
    //         userId: 1
    //     },
    // ];

    return (
        <div>
            <OrderBlock />
            <OrderList title="Работы:" orderItem={activities} />
            <OrderList title="Запчасти:" orderItem={autoparts} />
        </div>
    );
};

export default OrderPage;