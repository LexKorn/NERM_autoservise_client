import React from 'react';

import OrderBlock from '../components/OrderBlock/OrderBlock';
import OrderList from '../components/OrderList/OrderList';
import { IActivity, IAutopart } from '../types/types';


const OrderPage: React.FC = () => {
    const activities: IActivity[] = [
        {
            id: 1,
            name: 'ремонт тормоза',
            price: 1000
        },
        {
            id: 2,
            name: 'замена колодки',
            price: 500
        },
    ];

    const autoparts: IAutopart[] = [
        {
            id: 1,
            name: 'тормоз',
            price: 800
        },
        {
            id: 2,
            name: '2 колодки',
            price: 1000
        },
    ];

    return (
        <div>
            <OrderBlock />
            <OrderList title="Работы :" orderItem={activities} />
            <OrderList title="Запчасти :" orderItem={autoparts} />
        </div>
    );
};

export default OrderPage;