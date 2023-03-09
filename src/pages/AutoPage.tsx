import React from 'react';

import AutoBlock from '../components/AutoBlock/AutoBlock';
import OrderList2 from '../components/OrderList/OrderList2';
import { IOrder } from '../types/types';


const AutoPage: React.FC = () => {
    const orders: IOrder[] = [
        {
            id: 1,
            opened: '07.01.2023',
            closed: '09.01.2023',
            cost: 2000,
            income: 2000,
            profit: 1300,
            comment: 'Ну и дела',
            userId: 1,
            autoId: 1,
            masterId: 1
        },
        {
            id: 2,
            opened: '05.01.2023',
            cost: 2500,
            income: 2500,
            profit: 2000,
            userId: 1,
            autoId: 2,
            masterId: 1
        },
        {
            id: 3,
            opened: '08.01.2023',
            userId: 1,
            autoId: 3,
            masterId: 1
        }
    ];

    return (
        <div>
            <AutoBlock />
            <OrderList2 title="Заказы:" orderItem={orders} />
        </div>
    );
};

export default AutoPage;